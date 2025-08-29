import React from "react";
import type { Task } from "../interfaces/task.Interface";

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
