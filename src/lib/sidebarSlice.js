import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  activeSidebar: "recorder",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActiveSidebar: (state, action) => {
      state.activeSidebar = action.payload;
    },
  },
});
export const { setActiveSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
