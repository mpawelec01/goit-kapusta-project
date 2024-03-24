import React from "react";
import styles from "./ReportExpenses.module.css";
import icons from "../../img/icons.svg";

export const ReportIncome = ({toggleShowIncome}) => {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.listOfExpenses}>
          <svg
            className={styles.vectorLeft}
            width={7}
            height={12}
            onClick={toggleShowIncome}>
            <use href={`${icons}#icon-vector_left`}></use>
          </svg>
          <p className={styles.listOfExpenses_header}>Income</p>
          <svg
            className={styles.vectorLeft}
            width={7}
            height={12}
            onClick={toggleShowIncome}>
            <use href={`${icons}#icon-vector_right`}></use>
          </svg>
        </div>
        <ul className={styles.listOfExpenses_list}>
          <li className={styles.listOfExpenses_list_item}>
            <p>45 000.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-salary`}></use>
            </svg>
            <p>Salary</p>
          </li>
          <li className={styles.listOfExpenses_list_item}>
            <p>1 500.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-income`}></use>
            </svg>
            <p>Add Income</p>
          </li>
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