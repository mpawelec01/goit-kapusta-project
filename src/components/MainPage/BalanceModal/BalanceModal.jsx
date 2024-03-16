import css from "./BalanceModal.module.css";

const BalanceModal = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.textFirst}>
        Hello! To get started, enter the current balance of your account!
      </p>
      <br />
      <p className={css.textSecond}>
        You can't spend money until you have it :&#41;
      </p>
    </div>
  );
};

export default BalanceModal;
