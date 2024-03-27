export const getMonthName = (dateString) => {
  const date = new Date(dateString);
  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  return `${date.getFullYear()} ${monthNames[date.getMonth()]}`;
};

export const getFilteredMoths = (transactionsType) => {
  const filteredTransactions = transactionsType.map((transaction) => {
    const month = transaction.date.split(".")[1];
    const year = transaction.date.split(".")[2];
    const yearAndMonth = `${year}-${month}`;
    return yearAndMonth;
  });
  const transactionsMonths = filteredTransactions.map((transaction) =>
    getMonthName(transaction)
  );
  const uniqueTransactionsMonths = transactionsMonths.filter(
    (transaction, index) => {
      return transactionsMonths.indexOf(transaction) === index;
    }
  );
  return uniqueTransactionsMonths;
};

export const getFilteredTransactions = (transactionsType) => {
  const uniqueTransactionsMonths = getFilteredMoths(transactionsType);
  const listsOfTransactionsByMonths = uniqueTransactionsMonths.map((fil) => {
    const [selectedYear, selectedMonthName] = fil.split(" ");
    const selectedMonthNumber =
      new Date(
        Date.parse(`${selectedMonthName} 1, ${selectedYear}`)
      ).getMonth() + 1;

    const transactionsForSelectedMonth = transactionsType.filter(
      (transaction) => {
        const [transactionDay, transactionMonth, transactionYear] =
          transaction.date.split(".");
        return (
          parseInt(transactionMonth) === selectedMonthNumber &&
          parseInt(transactionYear) === parseInt(selectedYear)
        );
      }
    );
    return transactionsForSelectedMonth;
  });
  return listsOfTransactionsByMonths;
};

export const monthsFromTransactionType = (
  showIncome,
  incomeTransactions,
  expensesTransactions
) => {
  if (!showIncome) return getFilteredMoths(incomeTransactions);
  return getFilteredMoths(expensesTransactions);
};

export const getTransactionsByCategory = (
  filteredIncomeTransactions,
  index,
  category
) => {
  const incomesOfCurrentCategory =
    filteredIncomeTransactions[index] &&
    filteredIncomeTransactions[index].length > 0
      ? filteredIncomeTransactions[index].filter(
          (transaction) => transaction.category === category
        )
      : 0;
  return incomesOfCurrentCategory;
};

export const getTotalAmountOfCurrentCategory = (transactions) => {
  const total = transactions
    ? transactions.reduce(
        (accumulator, transaction) => accumulator + transaction.amount,
        0
      )
    : 0;
  return total;
};
