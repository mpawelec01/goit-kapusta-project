import { useDispatch, useSelector } from "react-redux";
import Today from "../../Today/Today";
import BalanceModal from "../BalanceModal/BalanceModal";
import ReportsLink from "../ReportsLink/ReportsLink";
import css from "./Balance.module.css";
import { selectBalance } from "../../../redux/balance/selectors";
import { setBalance } from "../../../redux/balance/operations";

const Balance = () => {
  const dispatch = useDispatch();

  const balance = useSelector(selectBalance);

  const handleSubmit = (evt) => {
    debugger;
    evt.preventDefault();
    const form = evt.currentTarget;
    const newBalance = form.elements.balance.value;

    dispatch(setBalance(newBalance));
    form.elements.balance.value = newBalance;
  };

  return (
    <div className={css.fullWrapper}>
      <ReportsLink />
      <form className={css.form} onSubmit={handleSubmit}>
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
            {balance === 0 && <BalanceModal />}
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
