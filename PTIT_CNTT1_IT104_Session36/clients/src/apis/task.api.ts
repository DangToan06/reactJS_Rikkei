import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";
import type { TaskI } from "../interfaces/task.interface";

export const getAllTasks = createAsyncThunk("task/getAllTask", async () => {
  const response = await axiosInstance.get("task");

  return response.data;
});

export const createTask = createAsyncThunk(
  "task/createTask",
  async (task: TaskI) => {
    const response = await axiosInstance.post("task", task);

    return response.data;
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleTask",
  async (id: number) => {
    console.log(id);

    await axiosInstance.delete(`task/${id}`);

    return id;
  }
);
