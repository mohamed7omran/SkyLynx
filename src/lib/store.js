import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
  },
});

export default store;
