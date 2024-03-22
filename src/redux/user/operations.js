import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

function setAuthorizationToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function clearAuthorizationToken() {
  axios.defaults.headers.common.Authorization = "";
}

export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (_, thunkAPI) => {
    const store = thunkAPI.getState();
    const token = store.auth.token;
    if (token) {
      setAuthorizationToken(token);
      try {
        const response = await axios.get(
          "http://localhost:4000/api/users/info"
        );
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);

export const updateUserBalance = createAsyncThunk(
  "user/updateBalance",
  async (_, thunkAPI) => {
    try {
      const response = await axios.patch(
        "http://localhost:4000/api/users/balance"
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
