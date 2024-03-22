import css from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className={css.wrapper}>
      <a onClick={() => navigate("/main")} className={css.item}>
        EXPENSES
      </a>
      <a onClick={() => navigate("/main/incomes")} className={css.item}>
        INCOME
      </a>
    </nav>
  );
};

export default Navigation;
