import css from "./TransactionsList.module.css";
import { TransactionElement } from "./TransactionElement";

const TransactionsList = ({ transactionsList }) => {
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
          {transactionsList &&
            transactionsList.map((transaction) => (
              <TransactionElement
                key={transaction._id}
                transaction={transaction}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionsList;
