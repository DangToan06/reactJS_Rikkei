import React from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TaskComplete from "./TaskComplete";
import TaskEmpty from "./TaskEmpty";
import TaskList from "./TaskList";

export default function TodoList() {
  return (
    <>
      <div className="container todo-container">
        {/* Tieu de */}
        <TodoHeader />
        {/* Phan Todo Input (Lay du lieu tu nguoi dung) */}
        <TodoInput />

        {/* Phan danh sach cong viec */}
        <TaskList />

        {/* Hiển thị công việc hoàn thành */}
        <TaskComplete />

        {/* Hiển thị khi chưa có công việc */}
        <TaskEmpty />
      </div>
    </>
  );
}
