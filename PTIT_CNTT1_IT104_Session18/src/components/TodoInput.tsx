import React, { useReducer, useState } from "react";
import { taskReducer } from "./reducers/taskReducer";
import type { Task } from "../interfaces/task.Interface";

export default function TodoInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isShowError, setIsShowError] = useState<boolean>(false);

  // Lay du lieu trong context

  //Goi reducer
  const [_, dispatch] = useReducer(taskReducer, []);

  //Ham lay gia tri ben trong input

  const handleChangInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setIsShowError(true);
    } else {
      setIsShowError(false);
    }
    setInputValue(event.target.value);
  };

  const handleSubmitFrom = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue) {
      const newTask: Task = {
        id: Math.ceil(Math.random() * 10000000),
        name: inputValue,
        isCompleted: false,
      };
      dispatch({
        type: "ADD_TASK",
        payload: newTask,
      });
    } else {
      setIsShowError(true);
    }
  };

  return (
    <>
      <form className="d-flex mb-1">
        <input
          onChange={handleChangInput}
          value={inputValue}
          type="text"
          className="form-control me-2"
          placeholder="Nhập công việc..."
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitFrom}
        >
          Thêm
        </button>
      </form>

      {isShowError && (
        <p className="text-danger error-text mb-3 text-sm fs-6">
          Vui lòng nhập tên công việc!
        </p>
      )}
    </>
  );
}
