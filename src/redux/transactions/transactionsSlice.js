import { createSlice } from "@reduxjs/toolkit";
import {
  fetchExpenses,
  fetchIncome,
  addExpense,
  addIncome,
  deleteExpense,
  deleteIncome,
} from "./operations";

const transactionsInitialState = {
  expenses: [],
  income: [],
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

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: transactionsInitialState,

  extraReducers: (builder) => {
    builder

      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions.expenses = action.payload;
      })

      .addCase(fetchIncome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions.income = action.payload;
      })

      .addCase(addExpense.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions.expenses.push(action.payload);
      })

      .addCase(addIncome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions.income.push(action.payload);
      })

      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.transactions.expenses.findIndex(
          (transaction) => transaction.id === action.payload.id
        );
        state.transactions.expenses.splice(index, 1);
      })

      .addCase(deleteIncome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.transactions.income.findIndex(
          (transaction) => transaction.id === action.payload.id
        );
        state.transactions.income.splice(index, 1);
      })

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "Someone use old function, fix it!";
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
