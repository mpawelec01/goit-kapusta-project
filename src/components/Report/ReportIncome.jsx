import React from "react";
import styles from "./ReportExpenses.module.css";
import icons from "../../img/icons.svg";
import {
  getTransactionsByCategory,
  getTotalAmountOfCurrentCategory,
} from "../../common/common";
import { Graph } from "../Chart/Chart";

const incomeCategories = ["Salary", "Add. Income"];
const iconsNames = ["salary", "income"];

export const ReportIncome = ({
  toggleShowIncome,
  currentIndex,
  filteredIncomeTransactions,
  showChart,
  setShowChart,
  iconName,
  setIconName,
  toggleChart,
}) => {
  const incomeByCategory = incomeCategories.map((category) =>
    getTransactionsByCategory(
      filteredIncomeTransactions,
      currentIndex,
      category
    )
  );

  const totals = incomeByCategory.map((el, index) => ({
    name: incomeCategories[index],
    total: getTotalAmountOfCurrentCategory(el),
    icon: iconsNames[index],
  }));

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
        <ul className={styles.listOfIncome_list}>
          {totals.map((obj) =>
            obj.total ? (
              <li key={obj.name} className={styles.listOfExpenses_list_item}>
                <p>{obj.total}</p>
                <svg
                  className={styles.iconSvg}
                  width={56}
                  height={56}
                  onClick={() => toggleChart(obj.name)}
                >
                  <use href={`${icons}#icon-${obj.icon}`}></use>
                </svg>
                <p>{obj.name}</p>
              </li>
            ) : (
              <></>
            )
          )}
        </ul>
      </div>
      {showChart ? (
        <Graph incomeByCategory={incomeByCategory} iconName={iconName} />
      ) : (
        <></>
      )}
      {/* <div className={styles.diagram}>
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
      </div> */}
    </div>
  );
};
