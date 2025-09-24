import { createSlice } from "@reduxjs/toolkit";
import type { RandomState } from "../../interfaces/task.interface";

const initialState: RandomState = {
  value: [],
};

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    random(state) {
      state.value = [...state.value, Math.ceil(Math.random() * 100)];
    },
  },
});

export const { random } = randomSlice.actions;
export default randomSlice.reducer;
