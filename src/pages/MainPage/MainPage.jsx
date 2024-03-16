import Icon from "../../components/Icon/Icon";
import Balance from "../../components/MainPage/Balance/Balance";
import Navigation from "../../components/MainPage/Navigation/Navigation";
import ProductForm from "../../components/MainPage/ProductForm/ProductForm";
import { TransactionsList } from "../../components/MainPage/TransactionsList/TransactionsList";
import MobileForm from "../../components/MainPage/MobileForm/MobileForm";
import css from "../MainPage/MainPage.module.css";
import Background from "../../components/Background/Background";

export default function MainPage() {
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
          <ProductForm />
        </div>
        <div className={css.mobileForm}>
          <MobileForm />
        </div>
        <TransactionsList />
      </div>
    </div>
  );
}
