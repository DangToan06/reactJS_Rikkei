import React, { useReducer } from "react";
import { taskReducer } from "./reducers/taskReducer";

export default function TaskItem() {
  const [_, dispatch] = useReducer(taskReducer, []);

  const handleDeleteTask = (id: number | string) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id: id },
    });
  };
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input className="form-check-input me-2" type="checkbox" />
          <span className="task-name">Quét nhà</span>
        </div>
        <div>
          <i className="fas fa-edit text-primary me-3" role="button" />
          <i
            onClick={() => handleDeleteTask(1)}
            className="fas fa-trash text-danger"
            role="button"
          />
        </div>
      </li>
    </>
  );
}
