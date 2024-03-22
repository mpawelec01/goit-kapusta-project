import css from "./TransactionsList.module.css";
import { TransactionElement } from "./TransactionElement";
import { useSelector } from "react-redux";
import { selectTransactions } from "../../../redux/transactions/selectors";
import { TransactionsMobile } from "./TransactionsMobile/TransactionsMobile";

export const TransactionsList = () => {
  const transactionsList = useSelector(selectTransactions) || null;

  return (
    <>
      {/* <TransactionsMobile transactionsList={transactionsList} /> */}
      <table className={css.table}>
        <thead>
          <tr className={css.tHead}>
            <th className={css.date}>DATE</th>
            <th className={css.description}>DESCRIPTION</th>
            <th className={css.category}>CATEGORY</th>
            <th className={css.sum}>SUM</th>
            <th className={css.empty}></th>
          </tr>
        </thead>

        <tbody className={css.tbodyScroll}>
          {/* {transactionsList &&
            transactionsList.map((transaction) => (
              <TransactionElement
                key={transaction.id}
                transaction={transaction}
              />
            ))} */}
        </tbody>
      </table>
    </>
  );
};
