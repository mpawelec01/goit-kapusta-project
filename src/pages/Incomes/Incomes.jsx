import React from "react";
import Icon from "../../components/Icon/Icon";
import Balance from "../../components/MainPage/Balance/Balance";
import Navigation from "../../components/MainPage/Navigation/Navigation";
import ProductForm from "../../components/MainPage/ProductForm/ProductForm";
import TransactionsList from "../../components/MainPage/TransactionsList/TransactionsList";
import MobileForm from "../../components/MainPage/MobileForm/MobileForm";
import css from "../MainPage/MainPage.module.css";
import Background from "../../components/Background/Background";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncome } from "../../redux/transactions/operations";
import { selectTransactions } from "../../redux/transactions/selectors";
import Summary from "../../components/MainPage/Summary/Summary";

export const Incomes = () => {
  const transactionsList =
    useSelector(selectTransactions).transactions.filter(
      (transaction) => transaction.type === "income"
    ) || null;
  const dispatch = useDispatch();
  console.log(transactionsList);

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  const handleShowModal = () => {
    const dialog = document.getElementById("mobileModal");
    dialog.showModal();
  };

  return (
    <div className={css.container}>
      <Background />
      <button
        type="button"
        className={css.btnWrapper}
        onClick={handleShowModal}
      >
        <Icon className={css.btnIcon} iconName="arrow_left" />
        <span className={css.btnText}>ADD TRANSACTION</span>
      </button>
      <Balance />
      <Navigation />

      <div className={css.transactionsWindow}>
        <div className={css.formDesktop}>
          <ProductForm transactionType="income" />
        </div>
        <div className={css.mobileForm}>
          <MobileForm />
        </div>
        <TransactionsList transactionsList={transactionsList} />
        <Summary />
      </div>
    </div>
  );
};
export default Incomes;
