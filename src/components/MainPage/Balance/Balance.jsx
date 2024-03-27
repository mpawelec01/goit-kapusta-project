import { useDispatch, useSelector } from "react-redux";
import Today from "../../Today/Today";
import BalanceModal from "../BalanceModal/BalanceModal";
import ReportsLink from "../ReportsLink/ReportsLink";
import css from "./Balance.module.css";
import { selectBalance } from "../../../redux/auth/selectors";
import { setBalance } from "../../../redux/auth/operations";
import { useEffect, useState } from "react";

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [value, setValue] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const newBalance = form.elements.balance.value;
    dispatch(setBalance(newBalance));
  };

  useEffect(() => {
    if (balance === 0) {
      setValue("");
      return;
    }
    setValue(balance.toFixed(2));
  }, [balance]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={css.fullWrapper}>
      <ReportsLink />
      <form className={css.form} onSubmit={handleSubmit} id="form">
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
              step="0.01"
              placeholder="00.00"
              value={value}
              onChange={onChange}
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
