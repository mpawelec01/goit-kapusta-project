import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL =
//   "https://vast-plum-camel-vest.cyclic.app/api/transactions";

export const fetchIncomeByPeriod = createAsyncThunk(
  "reports/fetchIncomeByPeriod",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/reports/income-by-period"
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchExpensesByPeriod = createAsyncThunk(
  "reports/fetchExpensesByPeriod",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/reports/expenses-by-period"
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchIncomeByCategory = createAsyncThunk(
  "reports/fetchIncomeByCategory",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/reports/income-by-category"
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchExpensesByCategory = createAsyncThunk(
  "reports/fetchExpensesByCategory",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/reports/expenses-by-category"
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
