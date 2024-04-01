import css from "./TransactionsList.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../../redux/transactions/operations";
import Icon from "../../Icon/Icon";
import { selectIsOpen } from "../../../redux/modal/selectors";
import { toggleIsOpen } from "../../../redux/modal/modalSlice";
import { SureModal } from "../../Modals/SureModal/SureModal";

export const TransactionElement = ({
  transaction,
  transactionType,
  currentId,
  setCurrentId,
}) => {
  const { date, description, category, amount, _id } = transaction;
  const dispatch = useDispatch();

  const isOpen = useSelector(selectIsOpen);

  const handleDelete = (e) => {
    setCurrentId(e.target.id);
    return dispatch(toggleIsOpen());
  };

  const handleDeleteTransaction = () => {
    dispatch(deleteTransaction(currentId));
    setCurrentId(null);
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
        <button
          type="button"
          className={css.btnDelete}
          onClick={handleDelete}
          id={_id}
        >
          <Icon id={_id} className={css.icon} iconName="delete" />
        </button>
        {isOpen && (
          <SureModal onYes={handleDeleteTransaction} currentId={currentId} />
        )}
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
