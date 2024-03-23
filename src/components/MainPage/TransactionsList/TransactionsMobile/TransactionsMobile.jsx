import css from "./TransactionsMobile.module.css";
import { useDispatch } from "react-redux";
import Icon from "../../../Icon/Icon";
import { deleteTransaction } from "../../../../redux/transactions/operations";

export const TransactionsMobile = ({ transactionsList, transactionType }) => {
  const dispatch = useDispatch();

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
              {transactionType === "expenses" && (
                <div
                  className={css.sumExpenses}
                >{`- ${transaction.amount} UAH.`}</div>
              )}
              {transactionType === "income" && (
                <div
                  className={css.sumIncome}
                >{`${transaction.amount} UAH.`}</div>
              )}

              <div className={css.btn}>
                <button
                  type="button"
                  className={css.btnDelete}
                  onClick={() => {
                    dispatch(deleteTransaction(transaction._id));
                  }}
                >
                  <Icon className={css.icon} iconName="delete" />
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};
