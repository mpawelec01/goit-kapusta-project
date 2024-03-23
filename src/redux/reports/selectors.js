export const selectIncomeByPeriod = (state) => state.reports.incomeByPeriod;

export const selectExpensesByPeriod = (state) => state.reports.expensesByPeriod;

export const selectIncomeByCategory = (state) => state.reports.incomeByCategory;

export const selectExpensesByCategory = (state) =>
  state.reports.expensesByCategory;

export const selectIsLoading = (state) => state.reports.isLoading;

export const selectError = (state) => state.reports.error;
