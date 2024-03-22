import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  addIncome,
  fetchExpensesCategories,
  fetchIncomeCategories,
} from "../../../redux/transactions/operations";

import { nanoid } from "nanoid";

import css from "./ProductForm.module.css";
import Icon from "../../Icon/Icon";
import Today from "../../Today/Today";
import { getDate } from "../../../getDate";
import {
  selectExpensesCategories,
  selectIncomeCategories,
} from "../../../redux/transactions/selectors";
import { useEffect } from "react";

const ProductForm = ({ transactionType }) => {
  const dispatch = useDispatch();
  const getCategories = () => {
    dispatch(fetchExpensesCategories());
    dispatch(fetchIncomeCategories());
  };
  useEffect(() => {
    getCategories();
  }, []);

  const expensesCategories = useSelector(selectExpensesCategories);
  const incomeCategories = useSelector(selectIncomeCategories);

  const balance = useSelector(selectBalance);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const today = getDate();
    const transaction = {
      date: today,
      description: form.elements.description.value,
      category: form.elements.category.value,
      amount: parseFloat(form.elements.amount.value),
    };

    if (transactionType === "expenses") {
      if (transaction.amount <= balance) {
        dispatch(addExpense(transaction));
      } else alert("Not enough balance. Please try another sum of money!");
    }

    if (transactionType === "income") {
      dispatch(addIncome(transaction));
    }

    form.reset();
  };

  const handleClear = () => {
    document.getElementById("addTransactionForm").reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} id="addTransactionForm">
      <div className={css.tabletView}>
        <div className={css.today}>
          <Today />
        </div>
        <div className={css.formInputs}>
          <div className={css.bothWrapper}>
            <div className={css.inputWrapper}>
              <input
                type="text"
                name="description"
                className={css.input}
                id="productName"
                placeholder=" "
                required
              />
              <label className={css.label} htmlFor="productName">
                Product description
              </label>
            </div>
            <div className={css.selectWrapper}>
              <select
                name="category"
                id="category-select"
                required
                defaultValue="default"
                className={css.input}
              >
                <option value="default" hidden>
                  Product category
                </option>
                {transactionType === "expenses" &&
                  expensesCategories.map((category) => (
                    <option key={nanoid()} value={category}>
                      {category}
                    </option>
                  ))}
                {transactionType === "income" &&
                  incomeCategories.map((category) => (
                    <option key={nanoid()} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className={css.flexWrapper}>
            <div className={css.sumWrapper}>
              <input
                type="number"
                name="amount"
                className={css.sumInput}
                required
                step="0.10"
                placeholder="0.00"
              />
              <span className={css.currency}>UAH</span>
            </div>
            <div className={css.iconWrapper}>
              <Icon className={css.icon} iconName="calculator" />
            </div>
          </div>
        </div>
      </div>

      <div className={css.buttons}>
        <button className={css.btn} type="submit">
          INPUT
        </button>
        <button className={css.btn} type="button" onClick={handleClear}>
          CLEAR
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
