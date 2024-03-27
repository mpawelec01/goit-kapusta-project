import React from "react";
import { ReportExpenses } from "./ReportExpenses";
import { ReportIncome } from "./ReportIncome";
import { getFilteredTransactions } from "../../common/common";

export const ToggledReport = ({
  showIncome,
  toggleShowIncome,
  currentIndex,
  expensesTransactions,
  incomeTransactions,
}) => {
  // const getTransactionsByCategory = (
  //   filteredIncomeTransactions,
  //   index,
  //   category
  // ) => {
  //   const incomesOfCurrentCategory =
  //     filteredIncomeTransactions[index] &&
  //     filteredIncomeTransactions[index].length > 0
  //       ? filteredIncomeTransactions[index].filter(
  //           (transaction) => transaction.category === category
  //         )
  //       : 0;
  //   return incomesOfCurrentCategory;
  // };

  // const getTotalAmountOfCurrentCategory = (transactions) => {
  //   const total = transactions
  //     ? transactions.reduce(
  //         (accumulator, transaction) => accumulator + transaction.amount,
  //         0
  //       )
  //     : 0;
  //   return total;
  // };

  const filteredIncomeTransactions =
    getFilteredTransactions(incomeTransactions);
  const filteredExpensesTransactions =
    getFilteredTransactions(expensesTransactions);

  return (
    <div>
      {showIncome ? (
        <ReportExpenses
          toggleShowIncome={toggleShowIncome}
          currentIndex={currentIndex}
          filteredExpensesTransactions={filteredExpensesTransactions}
          // getTransactionsByCategory={getTransactionsByCategory}
          // getTotalAmountOfCurrentCategory={getTotalAmountOfCurrentCategory}
        />
      ) : (
        <ReportIncome
          toggleShowIncome={toggleShowIncome}
          currentIndex={currentIndex}
          filteredIncomeTransactions={filteredIncomeTransactions}
          // getTransactionsByCategory={getTransactionsByCategory}
          // getTotalAmountOfCurrentCategory={getTotalAmountOfCurrentCategory}
        />
      )}
    </div>
  );
};
