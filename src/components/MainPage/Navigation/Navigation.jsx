import css from "./Navigation.module.css";
import { useNavigate, Link } from "react-router-dom";

const Navigation = ({ transactionType }) => {
  const navigate = useNavigate();
  return (
    <nav className={css.wrapper}>
      {transactionType === "expenses" && (
        <>
          <a onClick={() => navigate("/main")} className={css.active}>
            EXPENSES
          </a>
          <a onClick={() => navigate("/main/incomes")} className={css.item}>
            INCOME
          </a>
        </>
      )}

      {transactionType === "income" && (
        <>
          <a onClick={() => navigate("/main")} className={css.item}>
            EXPENSES
          </a>
          <a onClick={() => navigate("/main/incomes")} className={css.active}>
            INCOME
          </a>
        </>
      )}
    </nav>
  );
};

export default Navigation;
