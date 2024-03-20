export const selectTransactions = (state) => state.transactions;

export const selectIsLoading = (state) => state.transactions.isLoading;

export const selectError = (state) => state.transactions.error;
