import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://vast-plum-camel-vest.cyclic.app/api/users";

// export const getBalance = createAsyncThunk(
//   "balance/getBalance",
//   async (userId, thunkAPI) => {
//     try {
//       const response = await axios.get(`/${userId}/balance`);
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

//!!! Nie dokonca rozumiem skad pobiera sie userId???
export const setBalance = createAsyncThunk(
  "balance/setBalance",
  async (balance, thunkAPI) => {
    debugger;
    try {
      const state = thunkAPI.getState();
      const userId = state.auth.user.id;
      console.log(userId);
      const response = await axios.patch(`/${userId}/balance`, {
        balance,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
