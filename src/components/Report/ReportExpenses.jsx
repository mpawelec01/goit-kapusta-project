import React from "react";
import styles from "./ReportExpenses.module.css";
import icons from "../../img/icons.svg";
import {
  getTransactionsByCategory,
  getTotalAmountOfCurrentCategory,
} from "../../common/common";
import { Graph } from "../Chart/Chart";

const expensesCategories = [
  "Products",
  "Alcohol",
  "Entertainment",
  "Health",
  "Transport",
  "Housing",
  "Technique",
  "Communal, communication",
  "Sports, hobbies",
  "Education",
  "Other",
];
const iconsNames = [
  "products",
  "alcohol",
  "entertainment",
  "health",
  "transport",
  "housing",
  "technique",
  "communication",
  "hobbies",
  "education",
  "other",
];

export const ReportExpenses = ({
  toggleShowIncome,
  currentIndex,
  filteredExpensesTransactions,
  showChart,
  setShowChart,
  iconName,
  setIconName,
  toggleChart,
}) => {
  const expensesByCategory = expensesCategories.map((category) =>
    getTransactionsByCategory(
      filteredExpensesTransactions,
      currentIndex,
      category
    )
  );

  const totals = expensesByCategory.map((el, index) => ({
    name: expensesCategories[index],
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
          <p className={styles.listOfExpenses_header}>Expenses</p>
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
          <div className={styles.listOfExpenses_line}></div>
        </ul>
      </div>
      {showChart ? (
        <Graph incomeByCategory={expensesByCategory} iconName={iconName} />
      ) : (
        <></>
      )}
      {/* <div className={styles.diagram}>
        <ul className={styles.diagram_list}>
          <li className={styles.diagram_list_item}>
            <p className={styles.diagram_list_item_header}>Pork</p>
            <p className={styles.diagram_list_item_value}>1000 UAH</p>
            <div className={styles.diagram_list_item_chart_1}></div>
          </li>
          <li className={styles.diagram_list_item}>
            <p className={styles.diagram_list_item_header}>Beef</p>
            <p className={styles.diagram_list_item_value}>1000 UAH</p>
            <div className={styles.diagram_list_item_chart_2}></div>
          </li>
          <li className={styles.diagram_list_item}>
            <p className={styles.diagram_list_item_header}>Chicken</p>
            <p className={styles.diagram_list_item_value}>600 UAH</p>
            <div className={styles.diagram_list_item_chart_3}></div>
          </li>
          <li className={styles.diagram_list_item}>
            <p className={styles.diagram_list_item_header}>Fish</p>
            <p className={styles.diagram_list_item_value}>800 UAH</p>
            <div className={styles.diagram_list_item_chart_4}></div>
          </li>
          <li className={styles.diagram_list_item}>
            <p className={styles.diagram_list_item_header}>Panini</p>
            <p className={styles.diagram_list_item_value}>220 UAH</p>
            <div className={styles.diagram_list_item_chart_5}></div>
          </li>
          <li className={styles.diagram_list_item}>
            <p className={styles.diagram_list_item_header}>Coffee</p>
            <p className={styles.diagram_list_item_value}>350 UAH</p>
            <div className={styles.diagram_list_item_chart_6}></div>
          </li>
          <li className={styles.diagram_list_item}>
            <p className={styles.diagram_list_item_header}>Spaghetti</p>
            <p className={styles.diagram_list_item_value}>230 UAH</p>
            <div className={styles.diagram_list_item_chart_7}></div>
          </li>
          <li className={styles.diagram_list_item}>
            <p className={styles.diagram_list_item_header}>Chocolate</p>
            <p className={styles.diagram_list_item_value}>200 UAH</p>
            <div className={styles.diagram_list_item_chart_8}></div>
          </li>
          <li className={styles.diagram_list_item}>
            <p className={styles.diagram_list_item_header}>Olives</p>
            <p className={styles.diagram_list_item_value}>300 UAH</p>
            <div className={styles.diagram_list_item_chart_9}></div>
          </li>
          <li className={styles.diagram_list_item}>
            <p className={styles.diagram_list_item_header}>Greens</p>
            <p className={styles.diagram_list_item_value}>300 UAH</p>
            <div className={styles.diagram_list_item_chart_10}></div>
          </li>
        </ul>
      </div> */}
    </div>
  );
};
