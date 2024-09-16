import { createSlice } from "@reduxjs/toolkit";

const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem("darkMode");
  return storedDarkMode ? JSON.parse(storedDarkMode) : false;
};

const initialState = {
  darkMode: getInitialDarkMode(),
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem("darkMode", JSON.stringify(action.payload));
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
