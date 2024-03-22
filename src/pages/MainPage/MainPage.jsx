import Icon from "../../components/Icon/Icon";
import Balance from "../../components/MainPage/Balance/Balance";
import Navigation from "../../components/MainPage/Navigation/Navigation";
import ProductForm from "../../components/MainPage/ProductForm/ProductForm";
import { TransactionsList } from "../../components/MainPage/TransactionsList/TransactionsList";
import MobileForm from "../../components/MainPage/MobileForm/MobileForm";
import css from "../MainPage/MainPage.module.css";
import Background from "../../components/Background/Background";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchExpenses } from "../../redux/transactions/operations";
import Summary from "../../components/MainPage/Summary/Summary";

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

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
      <Navigation />

      <div className={css.transactionsWindow}>
        <div className={css.formDesktop}>
          <ProductForm />
        </div>
        <div className={css.mobileForm}>
          <MobileForm />
        </div>
        <div className={css.desktopView}>
          <TransactionsList />
          <div className={css.desktop}>
            <Summary />
          </div>
        </div>
      </div>
      <div className={css.tablet}>
        <Summary />
      </div>
    </div>
  );
}
