import css from "./TransactionsList.module.css";
import { TransactionElement } from "./TransactionElement";
import { useSelector } from "react-redux";
import { selectTransactions } from "../../../redux/transactions/selectors";
import Icon from "../../Icon/Icon";

export const TransactionsList = () => {
  const transactionsList = useSelector(selectTransactions) || null;

  return (
    <>
      <table className={css.table}>
        <thead>
          <tr className={css.tHead}>
            <th className={css.headDate}>DATE</th>
            <th className={css.headDescription}>DESCRIPTION</th>
            <th className={css.category}>CATEGORY</th>
            <th className={css.sum}>SUM</th>
            <th></th>
          </tr>
        </thead>

        <tbody className={css.tbody}>
          {/* <tr className={css.tableRow}>
            <td>date</td>
            <td>description</td>
            <td className={css.category}>category</td>
            <td className={css.sum}>amount</td>
            <td className={css.btn}>
              <button type="button" className={css.btnDelete}>
                <Icon className={css.icon} iconName="delete" />
              </button>
            </td>
          </tr>
          <tr className={css.tableRow}>
            <td>date</td>
            <td>description</td>
            <td className={css.category}>category</td>
            <td className={css.sum}>amount</td>
            <td className={css.btn}>
              <button type="button" className={css.btnDelete}>
                <Icon className={css.icon} iconName="delete" />
              </button>
            </td>
          </tr> */}
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
