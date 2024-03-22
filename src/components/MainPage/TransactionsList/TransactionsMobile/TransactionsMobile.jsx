import css from "./TransactionsMobile.module.css";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Icon from "../../../Icon/Icon";
import { deleteTransaction } from "../../../../redux/transactions/operations";

export const TransactionsMobile = ({ transactionsList }) => {
  //   const { date, description, category, amount, id } = transaction;
  //   const dispatch = useDispatch();

  //   const handleDelete = () => {
  //     dispatch(deleteTransaction(id));
  //   };

  return (
    <ul className={css.wrapper}>
      {transactionsList &&
        transactionsList.map((transaction) => (
          <li className={css.row} key={transaction.id}>
            <div className={css.left}>
              <div className={css.description}>{transaction.description}</div>
              <div className={css.down}>
                <div className={css.date}>{transaction.date}</div>
                <div className={css.category}>{transaction.category}</div>
              </div>
            </div>
            <div className={css.right}>
              <div className={css.sum}>{transaction.amount}</div>
              <div className={css.btn}>
                <button type="button" className={css.btnDelete}>
                  <Icon className={css.icon} iconName="delete" />
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};
