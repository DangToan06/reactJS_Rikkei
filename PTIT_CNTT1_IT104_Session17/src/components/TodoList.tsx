import React, { useState, useEffect } from "react";
import "./TodoList.css";
import { Pencil, Trash2 } from "lucide-react";

export default function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const taskName = newTask.trim();

    if (!taskName) {
      setError("Tên công việc không được để trống");
      return;
    }

    if (tasks.includes(taskName)) {
      setError("Tên công việc đã tồn tại");
      return;
    }

    setTasks([...tasks, taskName]);
    setNewTask("");
    setError("");
  };

  return (
    <div className="todo-container">
      <h2>Danh sách công việc</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Thêm</button>
      </div>

      {error && <p className="error">{error}</p>}

      <ul className="task-list main">
        {tasks.map((task, idx) => (
          <li key={idx}>
            <label>
              <input type="checkbox" />
              <span>{task}</span>
            </label>
            <div className="actions">
              <span className="edit">
                <Pencil />
              </span>
              <span className="delete">
                <Trash2 />
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="footer">
        Công việc đã hoàn thành: <b>0 / {tasks.length}</b>
      </div>
    </div>
  );
}
