import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  refreshUser,
  setBalance,
  googleLogIn,
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
  reducers: {
    // Reducers for direct state updates
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearAuthState: (state) => {
      state.user = { email: null, balance: null, avatarUrl: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
  },
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
        // Use the clearAuthState reducer to reset auth state on logout
        authSlice.caseReducers.clearAuthState(state);
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
      });
  },
});

export const { setToken, clearAuthState } = authSlice.actions;

export const authReducer = authSlice.reducer;
