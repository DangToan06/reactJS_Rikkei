import { useReducer } from "react";
import "./ArticleTracker.css";

type PostType = {
  id: number;
  title: string;
  tag: string;
};

type ActionType =
  | { type: "MARKREAD"; payload: number }
  | { type: "MARKUNREAD"; payload: number };

type StateType = {
  read: PostType[];
  unread: PostType[];
};

const exPosts: StateType = {
  read: [],
  unread: [
    { id: 1, title: "Hướng dẫn sử dụng React", tag: "React" },
    { id: 2, title: "Tìm hiểu về JavaScript ES6", tag: "JavaScript" },
    { id: 3, title: "CSS Grid vs Flexbox", tag: "CSS" },
    { id: 4, title: "Hướng dẫn tối ưu hóa hiệu suất web", tag: "Performance" },
  ],
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "MARKREAD": {
      const post = state.unread.find((p) => p.id === action.payload);
      if (!post) return state;
      return {
        read: [...state.read, post],
        unread: state.unread.filter((p) => p.id !== action.payload),
      };
    }
    case "MARKUNREAD": {
      const post = state.read.find((p) => p.id === action.payload);
      if (!post) return state;
      return {
        read: state.read.filter((p) => p.id !== action.payload),
        unread: [...state.unread, post],
      };
    }
    default:
      return state;
  }
};

export default function ArticleTracker() {
  const [posts, dispatch] = useReducer(reducer, exPosts);

  const handleMarkRead = (id: number) => () => {
    dispatch({ type: "MARKREAD", payload: id });
  };

  const handleMarkUnread = (id: number) => () => {
    dispatch({ type: "MARKUNREAD", payload: id });
  };

  const totalPosts = posts.read.length + posts.unread.length;
  const progressPercentage =
    totalPosts === 0 ? 0 : (posts.read.length / totalPosts) * 100;

  return (
    <div className="container">
      <h1 className="title">Quản lý bài viết</h1>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <p className="progress-text">
        Đã đọc {posts.read.length}/{totalPosts} bài viết (
        {progressPercentage.toFixed(0)}%)
      </p>

      <div className="card-container">
        <div className="card-header">
          Bài viết chưa đọc:
          <span className="badge unread">{posts.unread.length}</span>
        </div>
        {posts.unread.map((p) => (
          <div key={p.id} className="card">
            <div className="card-info">
              <span className="card-title">{p.title}</span>
              <span className="card-tag">{p.tag}</span>
            </div>
            <button onClick={handleMarkRead(p.id)} className="btn-read">
              Đánh dấu đã đọc
            </button>
          </div>
        ))}
      </div>

      <div className="card-container">
        <div className="card-header">
          Bài viết đã đọc:
          <span className="badge read">{posts.read.length}</span>
        </div>
        {posts.read.map((p) => (
          <div key={p.id} className="card">
            <div className="card-info">
              <span className="card-title">{p.title}</span>
              <span className="card-tag">{p.tag}</span>
            </div>
            <button onClick={handleMarkUnread(p.id)} className="btn-unread">
              Đánh dấu chưa đọc
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
