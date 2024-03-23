import css from "./Summary.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchIncomeByPeriod,
  fetchExpensesByPeriod,
} from "../../../redux/reports/operations";
import {
  selectIncomeByPeriod,
  selectExpensesByPeriod,
} from "../../../redux/reports/selectors";
import { selectBalance } from "../../../redux/auth/selectors";
import { nanoid } from "nanoid";
import { useEffect } from "react";

const Summary = ({ reportType }) => {
  const dispatch = useDispatch();
  const getReports = () => {
    dispatch(fetchIncomeByPeriod());
    dispatch(fetchExpensesByPeriod());
  };
  const balance = useSelector(selectBalance);
  useEffect(
    (balance) => {
      getReports();
    },
    [balance]
  );

  const incomeByPeriod = useSelector(selectIncomeByPeriod);
  const expensesByPeriod = useSelector(selectExpensesByPeriod);

  const getMonthName = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ];
    return `${date.getFullYear()} ${monthNames[date.getMonth()]}`;
  };

  return (
    <div className={css.wrapper}>
      <p className={css.title}>SUMMARY</p>
      <ul className={css.columns}>
        {reportType === "income" &&
          incomeByPeriod.map((income) => (
            <li key={nanoid()} className={css.row}>
              <p>{getMonthName(income.key)}</p>
              <p>{income.total}</p>
            </li>
          ))}
        {reportType === "expenses" && expensesByPeriod.length > 0 ? (
          expensesByPeriod.map((expense) => (
            <li key={nanoid()} className={css.row}>
              <p>{getMonthName(expense.key)}</p>
              <p>{expense.total}</p>
            </li>
          ))
        ) : (
          <li></li>
        )}
      </ul>
    </div>
  );
};

export default Summary;
