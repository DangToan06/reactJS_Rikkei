import { useReducer } from "react";
import { taskReducer } from "../components/reducers/taskReducer";
import TodoList from "../components/TodoList";
import { TaskContext } from "./TaskContext";
import type { Task } from "../interfaces/task.Interface";

export default function TaskContextProvider() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const handleAddTask = (task: Task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  const handleToggleTask = (id: number | string) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: { id },
    });
  };

  const handleUpdateTask = (id: number | string, name: string) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { id, name },
    });
  };

  const handleDeleteTask = (id: number | string) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id },
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleToggleTask,
        handleDeleteTask,
        handleUpdateTask,
      }}
    >
      <TodoList />
    </TaskContext.Provider>
  );
}
