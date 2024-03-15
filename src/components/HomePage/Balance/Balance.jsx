import Today from "../../Today/Today";
import BalanceModal from "../BalanceModal/BalanceModal";
import ReportsLink from "../ReportsLink/ReportsLink";
import css from "./Balance.module.css";

const Balance = () => {
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
              required
            />
            <span className={css.currency}>UAH</span>
          </div>
          <button className={css.btn} type="submit">
            CONFIRM
          </button>
        </div>
      </form>
      <div className={css.dateWrapper}>
        <Today />
      </div>
      {/* <BalanceModal /> */}
    </div>
  );
};

export default Balance;