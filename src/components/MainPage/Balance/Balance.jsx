import Today from "../../Today/Today";
import BalanceModal from "../BalanceModal/BalanceModal";
import ReportsLink from "../ReportsLink/ReportsLink";
import css from "./Balance.module.css";

const Balance = () => {
  // let balance;

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   const form = evt.currentTarget;
  //   balance = form.elements.value;
  // };

  return (
    <div className={css.fullWrapper}>
      <ReportsLink />
      <form className={css.form}>
        <label className={css.label} htmlFor="balance">
          Balance:
        </label>
        <div className={css.flexWrapper}>
          <div className={css.inputWrapper}>
            <input
              className={css.input}
              type="number"
              name="balance"
              max="10000000.00"
              id="balance"
              step="0.10"
              placeholder="00.00"
            />
            <span className={css.currency}>UAH</span>
            {/* <BalanceModal /> */}
          </div>
          <button className={css.btn} type="submit">
            CONFIRM
          </button>
        </div>
      </form>
      <div className={css.dateWrapper}>
        <Today />
      </div>
    </div>
  );
};

export default Balance;
