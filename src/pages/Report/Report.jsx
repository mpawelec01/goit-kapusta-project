import React from "react";
import styles from "./Report.module.css";
export const Report = () => {
  return (
    <div className={styles.container}>
      <div className={styles.period}>
        <p>Current period:</p>
        <p>November 2019</p>
      </div>
      <div className={styles.period}>
        <p>Balance:</p>
        <p>55 000.00 UAH</p>
      </div>
      <div>
        <div>
          <p>Expenses:</p>
          <p>- 18 000.00 UAH</p>
        </div>
        <div>
          <p>Income:</p>
          <p>+ 45 000.00 UAH</p>
        </div>
      </div>
      <div>
        <p>Expenses</p>
      </div>
    </div>
  );
};

