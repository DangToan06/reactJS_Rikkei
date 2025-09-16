import axios from "axios";
import React, { useState } from "react";
import { uid } from "uid";

interface Task {
  id: number;
  task: string;
  status: boolean;
}

type PropsType = {
  loadAddTask: () => void;
};

export default function AddTask({ loadAddTask }: PropsType) {
  const [inputValue, setInputValue] = useState<Task>();
  const [statusInput, setStatusInput] = useState<boolean>(true);

  const handleAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ id: Number(uid()), task: e.target.value, status: false });
    setStatusInput(true);
  };

  const onAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      inputValue?.task === null ||
      inputValue?.task === "" ||
      inputValue?.task === undefined
    ) {
      setStatusInput(false);
    } else {
      try {
        await axios.post("http://localhost:3000/Todos", inputValue);
        loadAddTask();
      } catch (error) {
        console.log("Khong them them task: ", error);
      }
    }
  };

  return (
    <form
      className="shadow-[-6px_10px_25px_-6px_rgba(0,0,0,0.2)] border-1 rounded-[6px] border-gray-300 mx-[20px] p-[10px] flex-col flex gap-2.5"
      onSubmit={onAddTask}
    >
      <div>
        <input
          value={inputValue?.task || ""}
          onChange={handleAddTask}
          type="text"
          placeholder="Nhập tên công việc"
          className={`outline-1  p-1.5 rounded-[6px] w-[100%] ${
            statusInput ? `outline-gray-400` : `outline-red-700`
          }`}
        />
        {statusInput ? (
          <></>
        ) : (
          <span className="text-red-600 font-medium">
            Tên công việc không được để trống
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-[#fff] rounded-[5px] py-1.5 cursor-pointer hover:bg-blue-800 active:bg-blue-700"
      >
        Thêm công việc
      </button>
    </form>
  );
}
