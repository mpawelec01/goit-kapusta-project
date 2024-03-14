import css from "./MobileNavigation.module.css";

const MobileNavigation = () => {
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

export default MobileNavigation;
