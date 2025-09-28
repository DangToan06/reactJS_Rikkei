import { createSlice } from "@reduxjs/toolkit";
import type { BookI, InitialStateType } from "../../interfaces/book.interface";
import {
  createBook,
  deleteBook,
  editBook,
  getAllBook,
} from "../../apis/book.api";

const initialState: InitialStateType = {
  status: "idle",
  data: [],
  error: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    search() {
      console.log(initialState.data);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllBook.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllBook.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAllBook.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.data = state.data.filter((s) => s.id !== action.payload);
      })
      .addCase(editBook.fulfilled, (state, action) => {
        state.data = state.data.map((b) =>
          b.id === action.payload.id
            ? ({ ...b, ...action.payload } as BookI)
            : b
        );
      });
  },
});

export default bookSlice.reducer;
