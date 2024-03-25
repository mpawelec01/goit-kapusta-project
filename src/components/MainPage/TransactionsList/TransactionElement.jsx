import css from "./TransactionsList.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../../redux/transactions/operations";
import { setBalance } from "../../../redux/auth/operations";
import Icon from "../../Icon/Icon";
import { selectBalance } from "../../../redux/auth/selectors";
import { selectIsOpen } from "../../../redux/modal/selectors";
import { toggleIsOpen } from "../../../redux/modal/modalSlice";
import { SureModal } from "../../Modals/SureModal/SureModal";

export const TransactionElement = ({ transaction, transactionType }) => {
  const { date, description, category, amount, _id } = transaction;
  const dispatch = useDispatch();

  const balance = useSelector(selectBalance);
  const isOpen = useSelector(selectIsOpen);

  const handleDelete = () => {
    dispatch(toggleIsOpen());
  };

  const deleteTransaction = () => {
    console.log("delete");
    if (transactionType === "expenses") {
      document.getElementById("balance").value = balance + amount;
      console.log("done");
      dispatch(setBalance(balance + transaction.amount));
    } else {
      document.getElementById("balance").value = balance - amount;
      dispatch(setBalance(balance - transaction.amount));
    }
    dispatch(deleteTransaction(_id));
  };

  return (
    <tr id={_id} className={css.tableRow}>
      <td className={css.date}>{date}</td>
      <td className={css.description}>{description}</td>
      <td className={css.category}>{category}</td>

      {transactionType === "expenses" && (
        <td className={css.sumExpenses}>{`- ${parseFloat(amount).toFixed(
          2
        )} UAH.`}</td>
      )}
      {transactionType === "income" && (
        <td className={css.sumIncome}>{`${parseFloat(amount).toFixed(
          2
        )} UAH.`}</td>
      )}

      <td className={css.btn}>
        <button type="button" className={css.btnDelete} onClick={handleDelete}>
          <Icon className={css.icon} iconName="delete" />
        </button>
        {isOpen && <SureModal onYes={deleteTransaction} />}
      </td>
    </tr>
  );
};

TransactionElement.propTypes = {
  transaction: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  transactionType: PropTypes.string,
};
