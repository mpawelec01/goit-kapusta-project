import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://vast-plum-camel-vest.cyclic.app/api/users";

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

export const setBalance = createAsyncThunk(
  "balance/setBalance",
  async (info, thunkAPI) => {
    try {
      const response = await axios.patch(`/${info.userId}/balance`, {
        balance: info.balance,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
