import css from "./TransactionsList.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  deleteExpense,
  deleteIncome,
} from "../../../redux/transactions/operations";

export const TransactionElement = ({ transaction }) => {
  const { date, description, category, sum, id } = transaction;
  const dispatch = useDispatch();

  const handleDeleteExpense = () => {
    dispatch(deleteExpense(id));
  };

  const handleDeleteIncome = () => {
    dispatch(deleteIncome(id));
  };

  return (
    <tr id={id} className={css.tableRow}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>
        <span>{sum}</span>
        <button
          type="button"
          className={css.btnDelete}
          onClick={handleDeleteExpense}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

TransactionElement.propTypes = {
  transaction: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
