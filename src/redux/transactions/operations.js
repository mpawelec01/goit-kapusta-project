import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserBalance } from "../auth/operations";

axios.defaults.baseURL = "https://vast-plum-camel-vest.cyclic.app/api";

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
        amount: info.amount,
      });
      thunkAPI.dispatch(getUserBalance());
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
        amount: info.amount,
      });
      thunkAPI.dispatch(getUserBalance());
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (transactionId, thunkAPI) => {
    try {
      const response = await axios.delete(`/transactions/${transactionId}`);
      thunkAPI.dispatch(getUserBalance());
      thunkAPI.dispatch(fetchExpenses());
      thunkAPI.dispatch(fetchIncome());
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchExpensesCategories = createAsyncThunk(
  "transactions/fetchExpensesCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/categories/expenses");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchIncomeCategories = createAsyncThunk(
  "transactions/fetchIncomeCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/categories/income");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
