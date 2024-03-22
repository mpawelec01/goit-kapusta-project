import css from "./TransactionsList.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../../redux/transactions/operations";

export const TransactionElement = ({ transaction }) => {
  const { date, description, category, amount, _id } = transaction;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTransaction(_id));
  };

  return (
    <tr id={_id} className={css.tableRow}>
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
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
