import { useEffect } from "react";
import styles from "./Report.module.css";
import icons from "../../img/icons.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance } from "../../redux/auth/selectors";
import {
  selectExpensesTransactions,
  selectIncomeTransactions,
  selectTransactions,
} from "../../redux/transactions/selectors";
import {
  fetchExpenses,
  fetchIncome,
} from "../../redux/transactions/operations";
export const ReportPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const balance = useSelector(selectBalance);

  // useEffect(() => {
  //   dispatch(fetchIncome());
  //   dispatch(fetchExpenses());
  // }, []);

  const expensesTransactions = useSelector(selectExpensesTransactions);
  const incomeTransactions = useSelector(selectIncomeTransactions);
  console.log(expensesTransactions);
  console.log(incomeTransactions);
  const totalExpenses = expensesTransactions.reduce(
    (accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    },
    0
  );
  const totalIncome = incomeTransactions.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  return (
    <div>
      <div className={styles.box}>
        <div
          onClick={() => navigate("/main")}
          className={styles.main_page_button}
        >
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
          <p className={styles.balance_value}>{balance} UAH</p>
          <button className={styles.balance_button}>Confirm</button>
        </div>
      </div>
      <div className={styles.summary}>
        <div className={styles.expenses}>
          <p className={styles.expenses_header}>Expenses:</p>
          <p className={styles.expenses_value}>- {totalExpenses} UAH</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.income}>
          <p className={styles.income_header}>Income:</p>
          <p className={styles.income_value}>+ {totalIncome} UAH</p>
        </div>
      </div>
    </div>
  );
};
