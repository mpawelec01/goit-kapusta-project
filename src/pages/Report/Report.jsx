import React from "react";
import styles from "./Report.module.css";
import icons from "../../img/icons.svg";
import { useNavigate } from "react-router-dom";
export const Report = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.bg}></div>

      <svg
        onClick={() => navigate("/main")}
        className={styles.arrowLeft}
        width={24}
        height={24}
      >
        <use href={`${icons}#icon-arrow_left`}></use>
      </svg>

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
      <div className={styles.listOfExpenses}>
        <svg className={styles.vectorLeft} width={7} height={12}>
          <use href={`${icons}#icon-vector_left`}></use>
        </svg>
        <p className={styles.listOfExpenses_header}>Expenses</p>
        <svg className={styles.vectorLeft} width={7} height={12}>
          <use href={`${icons}#icon-vector_right`}></use>
        </svg>
      </div>
      <div>
        <ul className={styles.listOfExpenses_list}>
          <li className={styles.listOfExpenses_list_item}>
            <p>5 000.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-products`}></use>
            </svg>
            <p>Products</p>
          </li>
          <li className={styles.listOfExpenses_list_item}>
            <p>3 000.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-alcohol`}></use>
            </svg>
            <p>Alcohol</p>
          </li>
          <li className={styles.listOfExpenses_list_item}>
            <p>2 400.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-entertainment`}></use>
            </svg>
            <p>Entertainment</p>
          </li>
          <div className={styles.listOfExpenses_line}></div>
          <li className={styles.listOfExpenses_list_item}>
            <p>2 220.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-health`}></use>
            </svg>
            <p>Health</p>
          </li>
          <li className={styles.listOfExpenses_list_item}>
            <p>2 000.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-transport`}></use>
            </svg>
            <p>Transport</p>
          </li>
          <li className={styles.listOfExpenses_list_item}>
            <p>1 800.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-housing`}></use>
            </svg>
            <p>Housing</p>
          </li>
          <div className={styles.listOfExpenses_line}></div>
          <li className={styles.listOfExpenses_list_item}>
            <p>1 500.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-technique`}></use>
            </svg>
            <p>Technique</p>
          </li>
          <li className={styles.listOfExpenses_list_item}>
            <p>900.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-communication`}></use>
            </svg>
            <p>Communal, Communication</p>
          </li>
          <li className={styles.listOfExpenses_list_item}>
            <p>800.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-hobbies`}></use>
            </svg>
            <p>Sports, Hobbies</p>
          </li>
          <div className={styles.listOfExpenses_line}></div>
          <li className={styles.listOfExpenses_list_item}>
            <p>800.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-education`}></use>
            </svg>
            <p>Education</p>
          </li>
          <li className={styles.listOfExpenses_list_item}>
            <p>200.00</p>
            <svg className={styles.iconSvg} width={56} height={56}>
              <use href={`${icons}#icon-other`}></use>
            </svg>
            <p>Other</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
