import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.wrapper}>
      <a href="/" className={css.item}>
        EXPENSES
      </a>
      <a href="/" className={css.item}>
        INCOME
      </a>
    </nav>
  );
};

export default Navigation;
