import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTask = createAsyncThunk("task/getAllTask", async () => {
  const response = axios.get("http://localhost:3000/tasks");

  return (await response).data;
});
