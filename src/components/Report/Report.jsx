import React from "react";
import styles from "./Report.module.css";
import icons from "../../img/icons.svg";
export const ReportPage = () => {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.main_page_button}>
          <svg className={styles.arrowLeft} width={24} height={24}>
            <use href={`${icons}#icon-arrow_left`}></use>
          </svg>
          <p>Main Page</p>
        </div>
        <div className={styles.period}>
          <p className={styles.period_header}>Current period:</p>
          <div className={styles.periodBox}>
            <svg className={styles.vectorLeft} width={7} height={12}>
              <use href={`${icons}#icon-vector_left`}></use>
            </svg>
            <p className={styles.period_date}>November 2019</p>
            <svg className={styles.vectorRight} width={7} height={12}>
              <use href={`${icons}#icon-vector_right`}></use>
            </svg>
          </div>
        </div>
        <div className={styles.balance}>
          <p className={styles.balance_header}>Balance:</p>
          <p className={styles.balance_value}>55 000.00 UAH</p>
          <button className={styles.balance_button}>Confirm</button>
        </div>
      </div>
      <div className={styles.summary}>
        <div className={styles.expenses}>
          <p className={styles.expenses_header}>Expenses:</p>
          <p className={styles.expenses_value}>- 18 000.00 UAH</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.income}>
          <p className={styles.income_header}>Income:</p>
          <p className={styles.income_value}>+ 45 000.00 UAH</p>
        </div>
      </div>
    </div>
  );
};
