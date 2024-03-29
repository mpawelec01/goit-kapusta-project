import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserBalance } from "../auth/operations";

// axios.defaults.baseURL =
//   "https://vast-plum-camel-vest.cyclic.app/api/transactions";

export const fetchExpenses = createAsyncThunk(
  "transactions/fetchExpenses",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/transactions/expenses"
      );
      console.log("jjj");
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
      const response = await axios.get(
        "http://localhost:4000/api/transactions/income"
      );
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
      const response = await axios.post(
        "http://localhost:4000/api/transactions/expenses",
        {
          date: info.date,
          description: info.description,
          category: info.category,
          amount: info.amount,
        }
      );
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
      const response = await axios.post(
        "http://localhost:4000/api/transactions/income",
        {
          date: info.date,
          description: info.description,
          category: info.category,
          amount: info.amount,
        }
      );
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
    console.log("redux");
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/transactions/${transactionId}`
      );
      thunkAPI.dispatch(getUserBalance());
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
      const response = await axios.get(
        "http://localhost:4000/api/categories/expenses"
      );
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
      const response = await axios.get(
        "http://localhost:4000/api/categories/income"
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
