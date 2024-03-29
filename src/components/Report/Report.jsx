import styles from "./Report.module.css";
import icons from "../../img/icons.svg";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { monthsFromTransactionType } from "../../common/common";

export const ReportPage = ({
  balance,
  expensesTransactions,
  incomeTransactions,
  showIncome,
  toggleShowIncome,
  currentIndex,
  setCurrentIndex,
  setIconName,
  setShowChart,
}) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchIncome());
  //   dispatch(fetchExpenses());
  // }, []);

  // console.log(expensesTransactions);
  // console.log(incomeTransactions);

  const totalExpenses = expensesTransactions.reduce(
    (accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    },
    0
  );
  const totalIncome = incomeTransactions.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  const filteredMonths = monthsFromTransactionType(
    showIncome,
    incomeTransactions,
    expensesTransactions
  );
  const handleLeftClick = () => {
    setShowChart(false);
    setIconName("");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredMonths.length - 1 : prevIndex - 1
    );
  };
  const handleRightClick = () => {
    setShowChart(false);
    setIconName("");
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredMonths.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className={styles.box}>
        <div
          onClick={() => navigate("/main")}
          className={styles.main_page_button}
        >
          <svg
            className={styles.arrowLeft}
            width={24}
            height={24}
            onClick={toggleShowIncome}
          >
            <use href={`${icons}#icon-arrow_left`}></use>
          </svg>
          <p>Main Page</p>
        </div>
        <div className={styles.period}>
          <p className={styles.period_header}>Current period:</p>
          <div className={styles.periodBox}>
            <svg
              className={styles.vectorLeft}
              width={7}
              height={12}
              onClick={handleLeftClick}
            >
              <use href={`${icons}#icon-vector_left`}></use>
            </svg>
            <p className={styles.period_date}>{filteredMonths[currentIndex]}</p>
            <svg
              className={styles.vectorRight}
              width={7}
              height={12}
              onClick={handleRightClick}
            >
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
