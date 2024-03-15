import css from "./TransactionsList.module.css";
import { TransactionElement } from "./TransactionElement";
import { useSelector } from "react-redux";
import { selectExpenses } from "../../../redux/transactions/selectors";

export const TransactionsList = () => {
  const transactionsList = useSelector(selectExpenses);

  return (
    <ul className={css.list}>
      {transactionsList.map((transaction) => (
        <TransactionElement key={transaction.id} contact={transaction} />
      ))}
    </ul>
  );
};
