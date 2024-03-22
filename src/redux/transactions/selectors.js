export const selectTransactions = (state) => state.transactions;

export const selectIsLoading = (state) => state.transactions.isLoading;

export const selectError = (state) => state.transactions.error;

export const selectExpensesCategories = (state) =>
  state.transactions.expensesCategories;

export const selectIncomeCategories = (state) =>
  state.transactions.incomeCategories;
