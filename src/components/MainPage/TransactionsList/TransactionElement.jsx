import css from "./TransactionsList.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../../redux/transactions/operations";

export const TransactionElement = ({ transaction }) => {
  const { date, description, category, amount, id } = transaction;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTransaction(id));
  };

  return (
    <tr id={id} className={css.tableRow}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>
        <span>{amount}</span>
        <button type="button" className={css.btnDelete} onClick={handleDelete}>
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
    amount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
