import FilterControls from "./components/FilterControls";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { createTask, deleteTask, getAllTasks } from "./apis/task.api";
import { CircularProgress } from "@mui/material";
import type { TaskI } from "./interfaces/task.interface";

const App = () => {
  const { data: tasks, error, status } = useAppSelector((store) => store.tasks);
  console.log(error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    search: "",
  });

  const handleAdd = (title: string, priority: "low" | "medium" | "high") => {
    const newTask: TaskI = {
      id: Date.now(),
      taskName: title,
      completed: false,
      priority,
    };

    dispatch(createTask(newTask));
  };

  const handleToggle = (id: number) => {
    // setTasks(
    //   tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    // );
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  // const filteredTasks = tasks.filter((t) => {
  //   const matchStatus =
  //     filters.status === "all" ||
  //     (filters.status === "completed" && t.completed) ||
  //     (filters.status === "active" && !t.completed);

  //   const matchPriority =
  //     filters.priority === "all" || t.priority === filters.priority;

  //   const matchSearch = t.title
  //     .toLowerCase()
  //     .includes(filters.search.toLowerCase());

  //   return matchStatus && matchPriority && matchSearch;
  // });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>
      <TaskForm onAdd={handleAdd} />
      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />
      {status === "pending" && (
        <CircularProgress disableShrink className="relative left-[300px]" />
      )}
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
