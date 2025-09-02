import { useReducer } from "react";
import data from "../data/data";
import "./Search.css";

interface Product {
  id: number;
  name: string;
  description: string;
}

type State = {
  keyword: string;
  filteredData: Product[];
};

type Action = { type: "SET_KEYWORD"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_KEYWORD": {
      const keyword = action.payload;
      const filtered = data.filter(
        (item) =>
          item.name.toUpperCase().includes(keyword.toUpperCase()) ||
          item.description.toUpperCase().includes(keyword.toUpperCase())
      );
      return { ...state, keyword, filteredData: filtered };
    }
    default:
      return state;
  }
};

export default function Search() {
  const [state, dispatch] = useReducer(reducer, {
    keyword: "",
    filteredData: data,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_KEYWORD", payload: event.target.value });
  };

  const len = state.filteredData.length;

  return (
    <div className="search-container">
      <div className="container">
        <h2 className="search-title">Tìm kiếm sản phẩm</h2>
        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm..."
          value={state.keyword}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {state.keyword && len > 0 && (
        <div className="results-count">
          {len} kết quả tìm thấy cho "{state.keyword}"
        </div>
      )}

      <div className="results">
        {len > 0 ? (
          state.filteredData.map((item) => (
            <div key={item.id} className="result-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p className="no-result">Không tìm thấy kết quả</p>
        )}
      </div>
    </div>
  );
}
