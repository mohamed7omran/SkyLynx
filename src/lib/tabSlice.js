import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  activeTab: "general",
};

export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});
export const { setActiveTab } = tabsSlice.actions;
export default tabsSlice.reducer;
