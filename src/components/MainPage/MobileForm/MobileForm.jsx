import ProductForm from "../ProductForm/ProductForm";
import Icon from "../../Icon/Icon";
import css from "./MobileForm.module.css";
import Background from "../../Background/Background";

const MobileForm = ({
  transactionType,
  isAddTransModalOpen,
  setIsAddTransModalOpen,
}) => {
  const handleCloseModal = () => {
    setIsAddTransModalOpen(false);
    const dialog = document.getElementById("mobileModal");
    dialog.close();
    document.body.style.position = "relative";
  };

  return (
    <dialog id="mobileModal" className={css.modal}>
      <div className={css.wrapper}>
        <Background />
        <button onClick={handleCloseModal} className={css.btn}>
          <Icon iconName="arrow_left" className={css.btnIcon} />
        </button>
        <ProductForm
          transactionType={transactionType}
          isAddTransModalOpen={isAddTransModalOpen}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </dialog>
  );
};

export default MobileForm;
