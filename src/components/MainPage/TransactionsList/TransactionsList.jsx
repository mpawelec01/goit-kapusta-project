import css from "./TransactionsList.module.css";
import { TransactionElement } from "./TransactionElement";
import { useSelector } from "react-redux";
import { selectTransactions } from "../../../redux/transactions/selectors";

export const TransactionsList = () => {
  const transactionsList = useSelector(selectTransactions);

  return (
    <>
      <table className={css.table}>
        <thead>
          <tr className={css.tHead}>
            <th className={css.th}>DATE</th>
            <th className={css.th}>DESCRIPTION</th>
            <th className={css.th}>CATEGORY</th>
            <th className={css.th}>SUM</th>
          </tr>
        </thead>

        <tbody>
          {transactionsList.map((transaction) => (
            <TransactionElement
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
