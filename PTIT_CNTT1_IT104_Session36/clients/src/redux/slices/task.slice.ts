import { createSlice } from "@reduxjs/toolkit";
import type { InitialStateType } from "../../interfaces/task.interface";
import { createTask, deleteTask, getAllTasks } from "../../apis/task.api";

const initialState: InitialStateType = {
  status: "idle",
  data: [],
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllTasks.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.data = state.data.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
// export const { getTaskDetail } = taskSlice.actions;
