import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isLogoutOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleIsOpen(state) {
      // console.log("toggleIsOpen");
      state.isOpen = !state.isOpen;
    },

    toggleIsLogout(state) {
      state.isLogoutOpen = !state.isLogoutOpen;
    },
  },
});

export const { toggleIsOpen, toggleIsLogout } = modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;
