import React, { useReducer } from "react";
import TodoList from "../components/TodoList";
import type { Task } from "../interfaces/task.Interface";
import { taskReducer } from "../components/reducers/taskReducer";

interface TaskContextType {
  tasks: Task[];
  handleAddTask?: (task: Task) => void;
  handleUpdateTask?: (id: number | string, newTask: Task) => void;
  handleDeleteTask?: (id: number | string) => void;
  handleToggleTask?: (id: number | string) => void;
}

// Buoc 1: Tao context
export const TaskContext = React.createContext<TaskContextType | undefined>(
  undefined
);

export default function TaskContextProvider() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks }}>
      <TodoList />
    </TaskContext.Provider>
  );
}
