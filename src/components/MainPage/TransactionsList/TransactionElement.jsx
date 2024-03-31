import css from "./TransactionsList.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../../redux/transactions/operations";
import Icon from "../../Icon/Icon";
import { selectIsOpen } from "../../../redux/modal/selectors";
import { toggleIsOpen } from "../../../redux/modal/modalSlice";
import { SureModal } from "../../Modals/SureModal/SureModal";
import { useState } from "react";

export const TransactionElement = ({ transaction, transactionType }) => {
  const { date, description, category, amount, _id } = transaction;
  const dispatch = useDispatch();
  // const [currentId, setCurrentId] = useState(null);
  // console.log(id);
  const isOpen = useSelector(selectIsOpen);

  const handleDelete = () => {
    // setCurrentId(id);
    return dispatch(toggleIsOpen());
  };

  const handleDeleteTransaction = () => {
    console.log("delete");
    console.log(_id);
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
        <button
          type="button"
          className={css.btnDelete}
          onClick={handleDeleteTransaction}
        >
          <Icon className={css.icon} iconName="delete" />
        </button>
        {isOpen && <SureModal onYes={handleDeleteTransaction} />}
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
