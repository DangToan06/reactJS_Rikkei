import { createSlice } from "@reduxjs/toolkit";
import type { InitialStateType } from "../../interfaces/task.interface";
import { getAllTask } from "../../apis/task.api";

const initialState: InitialStateType = {
  status: "idle",
  data: [],
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState, // gia tri khoi tạo
  reducers: {},
  extraReducers(builder) {
    // Sử lý tac vụ bất đồng bộ
    builder
      .addCase(getAllTask.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAllTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer; // Thêm .reducer thi store mới hiểu
