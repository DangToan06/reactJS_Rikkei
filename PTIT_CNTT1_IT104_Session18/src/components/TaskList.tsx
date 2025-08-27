import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../contexts/TaskContext";
import type { Task } from "../interfaces/task.Interface";

export default function TaskList() {
  // Lay gia tri tu context thong qua useContext
  // const { tasks } = useContext(TaskContext);

  return (
    <>
      <ul className="list-group my-3">
        <TaskItem />;
      </ul>
    </>
  );
}
