import { createSlice } from "@reduxjs/toolkit";
import type { DarkModeType } from "../../interfaces/task.interface";

const initialState: DarkModeType = {
  value: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    isDark(state) {
      state.value = !state.value;
    },
  },
});

export const { isDark } = darkModeSlice.actions;
export default darkModeSlice.reducer;
