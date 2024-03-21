import React, { useState } from "react";
import styles from "./ReportMixed.module.css";
import icons from "../../img/icons.svg";
import { ReportExpenses } from "./ReportExpenses";
import { ReportIncome } from "./ReportIncome";
export const ToggledReport = () => {
  const [showIncome, setShowIncome] = useState(true);
  const toggleShowIncome = () => {
    setShowIncome(!showIncome);
  };
return (
  <div>
    <div className={styles.listOfExpenses}>
      <svg
        className={styles.vectorLeft}
        width={7}
        height={12}
        onClick={toggleShowIncome}>
        <use href={`${icons}#icon-vector_left`}></use>
      </svg>
      <p className={styles.listOfExpenses_header}>
        {showIncome ? "Expenses" : "Income"}
      </p>
      <svg
        className={styles.vectorLeft}
        width={7}
        height={12}
        onClick={toggleShowIncome}>
        <use href={`${icons}#icon-vector_right`}></use>
      </svg>
    </div>
    {showIncome ? <ReportExpenses /> : <ReportIncome />}
  </div>
);
}

