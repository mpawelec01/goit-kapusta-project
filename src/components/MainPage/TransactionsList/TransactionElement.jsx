import css from "./TransactionsList.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../../redux/transactions/operations";
import Icon from "../../Icon/Icon";

export const TransactionElement = ({ transaction, transactionType }) => {
  const { date, description, category, amount, _id } = transaction;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTransaction(_id));
  };

  return (
    <tr id={_id} className={css.tableRow}>
      <td className={css.date}>{date}</td>
      <td className={css.description}>{description}</td>
      <td className={css.category}>{category}</td>

      {transactionType === "expenses" && (
        <td className={css.sumExpenses}>{`- ${amount} UAH.`}</td>
      )}
      {transactionType === "income" && (
        <td className={css.sumIncome}>{`${amount} UAH.`}</td>
      )}

      <td className={css.btn}>
        <button type="button" className={css.btnDelete} onClick={handleDelete}>
          <Icon className={css.icon} iconName="delete" />
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
  transactionType: PropTypes.string,
};
