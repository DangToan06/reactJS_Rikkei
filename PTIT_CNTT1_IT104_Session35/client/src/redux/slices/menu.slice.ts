import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  collapsed: boolean;
}

const initialState: MenuState = {
  collapsed: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.collapsed = !state.collapsed;
    },
    setMenu(state, action: PayloadAction<boolean>) {
      state.collapsed = action.payload;
    },
  },
});

export const { toggleMenu, setMenu } = menuSlice.actions;
export default menuSlice.reducer;
