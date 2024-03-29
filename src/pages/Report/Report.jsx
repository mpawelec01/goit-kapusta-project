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
import { getFilteredMoths, getFilteredTransactions } from "../../common/common";

export const Report = () => {
  const [showIncome, setShowIncome] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChart, setShowChart] = useState(false);
  const [iconName, setIconName] = useState("");

  const toggleShowIncome = () => {
    setShowChart(false);
    setIconName("");
    setShowIncome(!showIncome);
    setCurrentIndex(0);
  };

  const expensesTransactions = useSelector(selectExpensesTransactions);
  const incomeTransactions = useSelector(selectIncomeTransactions);
  const balance = useSelector(selectBalance);

  return (
    <div className={styles.container}>
      <div className={styles.bg} />
      <ReportPage
        expensesTransactions={expensesTransactions}
        incomeTransactions={incomeTransactions}
        balance={balance}
        showIncome={showIncome}
        toggleShowIncome={toggleShowIncome}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setIconName={setIconName}
        setShowChart={setShowChart}
      />
      <ToggledReport
        showIncome={showIncome}
        toggleShowIncome={toggleShowIncome}
        currentIndex={currentIndex}
        expensesTransactions={expensesTransactions}
        incomeTransactions={incomeTransactions}
        showChart={showChart}
        setShowChart={setShowChart}
        iconName={iconName}
        setIconName={setIconName}
      />
      <div className={styles.position_cabbages}>
        <div className={styles.cabbages} />
        <div className={styles.moreCabbages} />
      </div>
    </div>
  );
};
