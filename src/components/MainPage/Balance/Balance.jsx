import { useDispatch, useSelector } from "react-redux";
import Today from "../../Today/Today";
import BalanceModal from "../BalanceModal/BalanceModal";
import ReportsLink from "../ReportsLink/ReportsLink";
import css from "./Balance.module.css";
// import { selectBalance } from "../../../redux/balance/selectors";
// import { setBalance } from "../../../redux/balance/balanceSlice";

const Balance = () => {
  // const dispatch = useDispatch();

  // const balance = useSelector(selectBalance);

  // console.log(balance);

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   const form = evt.currentTarget;
  //   const newBalance = form.elements.value;
  //   dispatch(setBalance(newBalance));
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
