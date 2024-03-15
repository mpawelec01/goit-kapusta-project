export const selectExpenses = (state) => state.transactions.expenses;

export const selectIncome = (state) => state.transactions.income;

export const selectIsLoading = (state) => state.transactions.isLoading;

export const selectError = (state) => state.transactions.error;
