import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../slices/task.slice";
import counterSlice from "../slices/counter.slice";
import randomSlice from "../slices/random.slice";
import darkModeSlice from "../slices/darkMode.slice";
import displayCartSlice from "../slices/displayCart.slice";
import menuSlice from "../slices/menu.slice";

const store = configureStore({
  reducer: {
    task: taskSlice,
    counter: counterSlice,
    random: randomSlice,
    dark: darkModeSlice,
    mode: displayCartSlice,
    menu: menuSlice,
  },
});

export default store;

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
