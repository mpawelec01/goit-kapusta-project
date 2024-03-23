import { createSlice } from "@reduxjs/toolkit";
import { fetchUserInfo, updateUserBalance } from "./operations";

const initialState = {
  userInfo: {
    email: null,
    balance: null,
    avatar: null,
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.userInfo.email = action.payload;
        // state.userInfo.balance = action.payload.balance;
        // state.userInfo.avatar = action.payload.avatar;
      })
      .addCase(updateUserBalance.fulfilled, (state, action) => {
        state.userInfo.balance = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
