import React from "react";
import Icon from "../../components/Icon/Icon";
import Balance from "../../components/MainPage/Balance/Balance";
import Navigation from "../../components/MainPage/Navigation/Navigation";
import ProductForm from "../../components/MainPage/ProductForm/ProductForm";
import TransactionsList from "../../components/MainPage/TransactionsList/TransactionsList";
import MobileForm from "../../components/MainPage/MobileForm/MobileForm";
import css from "../MainPage/MainPage.module.css";
import Background from "../../components/Background/Background";
import Summary from "../../components/MainPage/Summary/Summary";
import { useSelector } from "react-redux";
import { selectIncomeTransactions } from "../../redux/transactions/selectors";

export const Incomes = () => {
  const transactionsList = useSelector(selectIncomeTransactions);

  const handleShowModal = () => {
    const dialog = document.getElementById("mobileModal");
    dialog.showModal();
    document.body.style.position = "fixed";
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
      <Navigation transactionType="income" />

      <div className={css.transactionsWindow}>
        <div className={css.formDesktop}>
          <ProductForm transactionType="income" />
        </div>
        <div className={css.mobileForm}>
          <MobileForm transactionType="income" />
        </div>
        <div className={css.desktopView}>
          <TransactionsList
            transactionsList={transactionsList}
            transactionType="income"
          />
          <div className={css.desktop}>
            <Summary reportType="income" />
          </div>
        </div>
      </div>
      <div className={css.tablet}>
        <Summary reportType="income" />
      </div>
    </div>
  );
};
export default Incomes;
