import css from "./TransactionsList.module.css";
// import { TransactionElement } from "./TransactionElement";
// import { useSelector } from "react-redux";
// import { selectExpenses } from "../../../redux/transactions/selectors";

export const TransactionsList = () => {
  // const transactionsList = useSelector(selectExpenses);

  return (
    <>
      <table className={css.table}>
        <tr className={css.tHead}>
          <th className={css.th}>DATE</th>
          <th className={css.th}>DESCRIPTION</th>
          <th className={css.th}>CATEGORY</th>
          <th className={css.th}>SUM</th>
        </tr>
        <tr>
          <td>example</td>
          <td></td>
          <td></td>
        </tr>
      </table>
      {/* <ul className={css.list}>
        {transactionsList.map((transaction) => (
          <TransactionElement key={transaction.id} contact={transaction} />
        ))}
      </ul> */}
    </>
  );
};
