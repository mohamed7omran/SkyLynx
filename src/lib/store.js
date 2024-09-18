import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";
import tabSlice from "./tabSlice";
import sidebarSlice from "./sidebarSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    tabs: tabSlice,
    sidebar: sidebarSlice,
  },
});

export default store;
