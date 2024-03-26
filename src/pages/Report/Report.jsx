import React, { useState } from "react";
import styles from "./Report.module.css";
import { ReportPage } from "../../components/Report/Report";
import { ToggledReport } from "../../components/Report/ToggledReport";
import { useSelector } from "react-redux";
import {
  selectExpensesTransactions,
  selectIncomeTransactions,
  selectTransactions,
} from "../../redux/transactions/selectors";
import { selectBalance } from "../../redux/auth/selectors";

export const Report = () => {
  const [showIncome, setShowIncome] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleShowIncome = () => {
    setShowIncome(!showIncome);
    setCurrentIndex(0);
  };

  const expensesTransactions = useSelector(selectExpensesTransactions);
  const incomeTransactions = useSelector(selectIncomeTransactions);
  const balance = useSelector(selectBalance);

  const getMonthName = (dateString) => {
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

  const getFilteredMoths = (transactionsType) => {
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

  const getFilteredTransactions = (transactionsType) => {
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
  const filteredIncomeTransactions =
    getFilteredTransactions(incomeTransactions);
  const filteredExpensesTransactions =
    getFilteredTransactions(expensesTransactions);

  return (
    <div className={styles.container}>
      <div className={styles.bg} />
      <ReportPage
        expensesTransactions={expensesTransactions}
        incomeTransactions={incomeTransactions}
        balance={balance}
        getFilteredMoths={getFilteredMoths}
        showIncome={showIncome}
        toggleShowIncome={toggleShowIncome}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <ToggledReport
        showIncome={showIncome}
        toggleShowIncome={toggleShowIncome}
        currentIndex={currentIndex}
        filteredIncomeTransactions={filteredIncomeTransactions}
        filteredExpensesTransactions={filteredExpensesTransactions}
      />
      <div className={styles.position_cabbages}>
        <div className={styles.cabbages} />
        <div className={styles.moreCabbages} />
      </div>
    </div>
  );
};
