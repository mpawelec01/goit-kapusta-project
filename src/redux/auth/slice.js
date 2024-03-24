import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser, setBalance } from "./operations";

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
        console.log(state.token);
        console.log(state.user);
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
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(setBalance.fulfilled, (state, action) => {
        state.user.balance = action.payload.balance;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
