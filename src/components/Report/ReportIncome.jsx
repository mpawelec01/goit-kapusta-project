import React from "react";
import styles from "./ReportExpenses.module.css";
import icons from "../../img/icons.svg";
export const ReportIncome = ({
  toggleShowIncome,
  currentIndex,
  filteredIncomeTransactions,
  getTransactionsByCategory,
  getTotalAmountOfCurrentCategory,
}) => {
  const salaryIncome = getTransactionsByCategory(
    filteredIncomeTransactions,
    currentIndex,
    "Salary"
  );
  const additionalIncome = getTransactionsByCategory(
    filteredIncomeTransactions,
    currentIndex,
    "Add. Income"
  );
  const totalSalary = getTotalAmountOfCurrentCategory(salaryIncome);
  const totalAdditionalInc = getTotalAmountOfCurrentCategory(additionalIncome);

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.listOfExpenses}>
          <svg
            className={styles.vectorLeft}
            width={7}
            height={12}
            onClick={toggleShowIncome}
          >
            <use href={`${icons}#icon-vector_left`}></use>
          </svg>
          <p className={styles.listOfExpenses_header}>Income</p>
          <svg
            className={styles.vectorLeft}
            width={7}
            height={12}
            onClick={toggleShowIncome}
          >
            <use href={`${icons}#icon-vector_right`}></use>
          </svg>
        </div>
        <ul className={styles.listOfExpenses_list}>
          {salaryIncome && salaryIncome.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalSalary}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-salary`}></use>
              </svg>
              <p>Salary</p>
            </li>
          ) : (
            <li></li>
          )}
          {additionalIncome && additionalIncome.length > 0 ? (
            <li className={styles.listOfExpenses_list_item}>
              <p>{totalAdditionalInc}</p>
              <svg className={styles.iconSvg} width={56} height={56}>
                <use href={`${icons}#icon-income`}></use>
              </svg>
              <p>Add Income</p>
            </li>
          ) : (
            <li></li>
          )}
        </ul>
      </div>
      <div className={styles.diagram}>
        <ul className={styles.diagram_list}>
          <li className={styles.diagram_list_item}>
            <p className={styles.diagram_list_item_header}>My</p>
            <p className={styles.diagram_list_item_value}>25 000 UAH</p>
            <div className={styles.diagram_list_item_chart_1}></div>
          </li>
          <li className={styles.diagram_list_item}>
            <p className={styles.diagram_list_item_header}>Wife</p>
            <p className={styles.diagram_list_item_value}>20 000 UAH</p>
            <div className={styles.diagram_list_item_chart_2}></div>
          </li>
        </ul>
      </div>
    </div>
  );
};
