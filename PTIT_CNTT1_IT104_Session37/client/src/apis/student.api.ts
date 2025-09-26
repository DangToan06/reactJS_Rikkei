import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstande";
import type { StudentI } from "../interfaces/student.interface";

export const getAllStudents = createAsyncThunk(
  "student/getAllStudent",
  async () => {
    const response = await axiosInstance.get("students");
    return response.data;
  }
);

export const createStudent = createAsyncThunk(
  "students/createStudent",
  async (newStudent: StudentI) => {
    const response = await axiosInstance.post("students", newStudent);
    console.log(response.data);

    return response.data;
  }
);

export const deleteStudent = createAsyncThunk(
  "delete/deleteStudent",
  async (id: number) => {
    await axiosInstance.delete(`students/${id}`);

    return id;
  }
);
