import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// "https://vast-plum-camel-vest.cyclic.app/api"

// axios.defaults.baseURL = "";

// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/register",
        credentials
      );
      setAuthHeader(res.data.result.user.token);
      console.log(res.data.result.user.token);
      return res.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
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

/*
 * GET @ /auth/google
 * body: { email, password }
 */
export const googleLogIn = createAsyncThunk(
  "auth/google",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("http://localhost:4000/auth/google");
      setAuthHeader(res.data.user.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.get("http://localhost:4000/api/auth/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("http://localhost:4000/api/users/info");
      return res.data.result.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setBalance = createAsyncThunk(
  "auth/setBalance",
  async (balance, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const userId = state.auth.user.id;
      const response = await axios.patch(
        `http://localhost:4000/api/users/balance`,
        {
          balance,
        }
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
