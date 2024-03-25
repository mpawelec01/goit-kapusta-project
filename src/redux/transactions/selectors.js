export const selectTransactions = (state) => state.transactions.transactions;

export const selectExpensesTransactions = (state) =>
  state.transactions.transactions.filter(
    (transaction) => transaction.type === "expenses"
  );

export const selectIncomeTransactions = (state) =>
  state.transactions.transactions.filter(
    (transaction) => transaction.type === "income"
  );

export const selectIsLoading = (state) => state.transactions.isLoading;

export const selectError = (state) => state.transactions.error;

export const selectExpensesCategories = (state) =>
  state.transactions.expensesCategories;

export const selectIncomeCategories = (state) =>
  state.transactions.incomeCategories;
