import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("mode")
    ? localStorage.getItem("mode")
    : window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    lightMode: (state) => {
      state.mode = "light";
      localStorage.setItem("mode", "light");
    },
    darkMode: (state) => {
      state.mode = "dark";
      localStorage.setItem("mode", "dark");
    },
  },
});

export const { lightMode, darkMode } = themeSlice.actions;
export default themeSlice.reducer;
