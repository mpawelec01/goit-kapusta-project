import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://vast-plum-camel-vest.cyclic.app/api/transactions/";

export const fetchExpenses = createAsyncThunk(
  "transactions/fetchExpenses",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/transactions/expenses");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchIncome = createAsyncThunk(
  "transactions/fetchIncome",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/income");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addExpense = createAsyncThunk(
  "transactions/addExpense",
  async (info, thunkAPI) => {
    try {
      const response = await axios.post("/expenses", {
        date: info.date,
        description: info.description,
        category: info.category,
        sum: info.sum,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addIncome = createAsyncThunk(
  "transactions/addIncome",
  async (info, thunkAPI) => {
    try {
      const response = await axios.post("/income", {
        date: info.date,
        description: info.description,
        category: info.category,
        sum: info.sum,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteExpense = createAsyncThunk(
  "transactions/deleteExpense",
  async (transactionId, thunkAPI) => {
    try {
      const response = await axios.delete(`/expenses/${transactionId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteIncome = createAsyncThunk(
  "transactions/deleteIncome",
  async (transactionId, thunkAPI) => {
    try {
      const response = await axios.delete(`/income/${transactionId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
