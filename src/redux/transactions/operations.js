import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "name-of-endpoint";

export const fetchExpenses = createAsyncThunk(
  "transactions/fetchExpenses",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/transactions/expenses");
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
      const response = await axios.get("/transactions/income");
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
      const response = await axios.post("/transactions/expenses", {
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
      const response = await axios.post("/transactions/income", {
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
      const response = await axios.delete(
        `/transactions/expenses/${transactionId}`
      );
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
      const response = await axios.delete(
        `/transactions/income/${transactionId}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
