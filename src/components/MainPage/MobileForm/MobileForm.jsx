import ProductForm from "../ProductForm/ProductForm";
import Icon from "../../Icon/Icon";
import css from "./MobileForm.module.css";
import Background from "../../Background/Background";

const MobileForm = () => {
  const handleCloseModal = () => {
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
        <ProductForm />
      </div>
    </dialog>
  );
};

export default MobileForm;
