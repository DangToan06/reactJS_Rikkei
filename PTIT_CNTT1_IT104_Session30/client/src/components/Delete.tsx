import axios from "axios";
import React from "react";

type PropsType = {
  reLoadPage: () => void;
};

export default function Delete({ reLoadPage }: PropsType) {
  const handleDelete = async () => {
    try {
      const res = await axios.get("http://localhost:3000/Todos?status=true");
      const doneTasks = res.data;
      await Promise.all(
        doneTasks.map((task: { id: number }) =>
          axios.delete(`http://localhost:3000/Todos/${task.id}`)
        )
      );
      reLoadPage();
    } catch (error) {
      console.log("loi: ", error);
    }
  };

  const handleDeleteAllTask = async () => {
    try {
      const res = await axios.get("http://localhost:3000/Todos");
      const doneTasks = res.data;
      await Promise.all(
        doneTasks.map((task: { id: number }) =>
          axios.delete(`http://localhost:3000/Todos/${task.id}`)
        )
      );
      reLoadPage();
    } catch (error) {
      console.log("loi: ", error);
    }
  };

  return (
    <div className="flex justify-between mx-[20px] my-[20px]">
      <button
        className="bg-red-500 text-[#fff] py-2 px-3 rounded-[5px] cursor-pointer hover:bg-red-700"
        onClick={handleDelete}
      >
        Xóa công việc hoàn thành
      </button>
      <button
        className="bg-red-500 text-[#fff] py-2 px-3 rounded-[5px] cursor-pointer hover:bg-red-700"
        onClick={handleDeleteAllTask}
      >
        Xóa tất cả công việc
      </button>
    </div>
  );
}
