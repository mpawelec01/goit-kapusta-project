import { createSlice } from "@reduxjs/toolkit";
import {
  fetchIncomeByPeriod,
  fetchExpensesByPeriod,
  fetchIncomeByCategory,
  fetchExpensesByCategory,
} from "./operations";

const reportsInitialState = {
  incomeByPeriod: [],
  expensesByPeriod: [],
  incomeByCategory: [],
  expensesByCategory: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action) => {
  return action.type.endsWith("/rejected");
};

const reportsSlice = createSlice({
  name: "reports",
  initialState: reportsInitialState,

  extraReducers: (builder) => {
    builder

      .addCase(fetchIncomeByPeriod.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.incomeByPeriod = action.payload.report.filter(
          (report) => report /* .type === "income" */
        );
      })

      .addCase(fetchExpensesByPeriod.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.expensesByPeriod = action.payload.report.filter(
          (report) => report /* === "expenses" */
        );
      })

      .addCase(fetchIncomeByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.incomeByCategory = action.payload.report.filter(
          (report) => report.type === "income"
        );
      })

      .addCase(fetchExpensesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.incomeByCategory = action.payload.report.filter(
          (report) => report.type === "expenses"
        );
      })

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "Someone use old function, fix it!";
      });
  },
});

export const reportsReducer = reportsSlice.reducer;
