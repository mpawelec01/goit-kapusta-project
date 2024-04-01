import css from "./TransactionsList.module.css";
import { TransactionElement } from "./TransactionElement";
import { TransactionsMobile } from "./TransactionsMobile/TransactionsMobile";
import { useState } from "react";

const TransactionsList = ({ transactionsList, transactionType }) => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <>
      <TransactionsMobile
        transactionsList={transactionsList}
        transactionType={transactionType}
      />

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
          {transactionsList &&
            transactionsList.map((transaction) => (
              <TransactionElement
                key={transaction._id}
                transaction={transaction}
                transactionType={transactionType}
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionsList;
