import React, { useState } from "react";
import { ReportExpenses } from "./ReportExpenses";
import { ReportIncome } from "./ReportIncome";

export const ToggledReport = () => {
  const [showIncome, setShowIncome] = useState(true);

  const toggleShowIncome = () => {
    setShowIncome(!showIncome);
  };

  return (
    <div>
      {showIncome ? (
        <ReportExpenses toggleShowIncome={toggleShowIncome} />
      ) : (
        <ReportIncome toggleShowIncome={toggleShowIncome} />
      )}
    </div>
  );
};
