import { createSlice } from "@reduxjs/toolkit";
import type { InitialStateType } from "../../interfaces/student.interface";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
} from "../../apis/student.api";

const initialState: InitialStateType = {
  status: "idle",
  data: [],
  error: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllStudents.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllStudents.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAllStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.data = state.data.filter((s) => s.id !== action.payload);
      });
  },
});

export default studentSlice.reducer;
