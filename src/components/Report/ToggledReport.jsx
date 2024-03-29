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
  showChart,
  setShowChart,
  iconName,
  setIconName,
}) => {
  const filteredIncomeTransactions =
    getFilteredTransactions(incomeTransactions);
  const filteredExpensesTransactions =
    getFilteredTransactions(expensesTransactions);
  const toggleChart = (name) => {
    setIconName(name);
    setShowChart(true);
  };

  return (
    <div>
      {showIncome ? (
        <ReportExpenses
          toggleShowIncome={toggleShowIncome}
          currentIndex={currentIndex}
          filteredExpensesTransactions={filteredExpensesTransactions}
          showChart={showChart}
          setShowChart={setShowChart}
          iconName={iconName}
          setIconName={setIconName}
          toggleChart={toggleChart}
        />
      ) : (
        <ReportIncome
          toggleShowIncome={toggleShowIncome}
          currentIndex={currentIndex}
          filteredIncomeTransactions={filteredIncomeTransactions}
          showChart={showChart}
          setShowChart={setShowChart}
          iconName={iconName}
          setIconName={setIconName}
          toggleChart={toggleChart}
        />
      )}
    </div>
  );
};
