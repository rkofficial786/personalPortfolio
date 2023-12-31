import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode:localStorage.getItem("darkmode") ? JSON.parse(localStorage.getItem("darkmode")) : false,
};

const darkModeSlice = createSlice({
  name: "darkmode",
  initialState: initialState,
  reducers: {
    setIsDarkMode(state, value) {
      state.isDarkMode = value.payload;
    },
  },
});

export const { setIsDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
