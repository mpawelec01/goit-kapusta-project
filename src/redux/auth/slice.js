import { createSlice } from "@reduxjs/toolkit";
// import { add } from "date-fns";
import {
  register,
  logIn,
  logOut,
  refreshUser,
  setBalance,
  googleLogIn,
  getUserBalance,
} from "./operations";

const initialState = {
  user: { email: null, balance: null, avatarUrl: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
      })
      .addCase(googleLogIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(setBalance.fulfilled, (state, action) => {
        state.user.balance = action.payload.balance;
        state.isRefreshing = false;
      })
      .addCase(getUserBalance.fulfilled, (state, action) => {
        state.user.balance = action.payload.balance;
        state.isRefreshing = false;
      })
      .addCase(getUserBalance.rejected, (state, action) => {});
  },
});

export const authReducer = authSlice.reducer;
