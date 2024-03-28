import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken as setTokenSlice } from "./slice";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/register",
        credentials
      );
      setAuthHeader(res.data.result.user.token);
      return res.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        credentials
      );
      setAuthHeader(res.data.result.user.token);
      return res.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const googleLogIn = createAsyncThunk(
  "auth/google",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("http://localhost:4000/auth/google");
      setAuthHeader(res.data.user.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.get("http://localhost:4000/api/auth/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    setAuthHeader(persistedToken);
    try {
      const res = await axios.get("http://localhost:4000/api/users/info");
      return res.data;
    } catch (error) {
      clearAuthHeader(); // Clear the auth header if refreshing user fails
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setBalance = createAsyncThunk(
  "auth/setBalance",
  async (balance, thunkAPI) => {
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/users/balance`,
        { balance }
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// New action to set the token
export const setToken = createAsyncThunk(
  "auth/setToken",
  async (token, thunkAPI) => {
    try {
      setAuthHeader(token); // Apply the token to the auth header for subsequent requests
      thunkAPI.dispatch(setTokenSlice(token)); // Update the Redux store with the new token
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
