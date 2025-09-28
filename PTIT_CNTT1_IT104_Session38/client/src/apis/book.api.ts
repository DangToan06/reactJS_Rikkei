import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";
import type { BookI } from "../interfaces/book.interface";

export const getAllBook = createAsyncThunk("book/getAllBook", async () => {
  const response = await axiosInstance.get("books");
  return response.data;
});

export const createBook = createAsyncThunk(
  "book/createBook",
  async (newBook: BookI) => {
    const response = await axiosInstance.post("books", newBook);
    return response.data;
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (id: string) => {
    await axiosInstance.delete(`books/${id}`);
    return id;
  }
);

export const editBook = createAsyncThunk(
  "book/editBook",
  async ({ id, updatedBook }: { id: string; updatedBook: BookI }) => {
    const response = await axiosInstance.put(`books/${id}`, updatedBook);
    return response.data;
  }
);
