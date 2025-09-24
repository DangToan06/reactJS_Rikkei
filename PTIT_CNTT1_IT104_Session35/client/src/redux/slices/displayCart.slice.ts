import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "list",
};

const displayCartSlice = createSlice({
  name: "displayCart",
  initialState,
  reducers: {
    changeDisplay(state) {
      state.value = state.value === "list" ? "grid" : "list";
    },
  },
});

export const { changeDisplay } = displayCartSlice.actions;
export default displayCartSlice.reducer;
