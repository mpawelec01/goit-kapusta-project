import css from "./SureModal.module.css";
import { useDispatch } from "react-redux";
import { toggleIsOpen } from "../../../redux/modal/modalSlice";

export const SureModal = ({ onYes, currentId }) => {
  const dispatch = useDispatch();

  const toggleSure = () => {
    // console.log("toggleSure");
    dispatch(toggleIsOpen());
    // console.log(currentId);
    onYes(currentId);
  };

  const toggleSureNo = () => {
    dispatch(toggleIsOpen());
  };

  return (
    <section className={css.backdrop}>
      <div className={css.sureModal}>
        <button type="button" className={css.closeModal} onClick={toggleSureNo}>
          X
        </button>
        <div className={css.container}>
          <p>Are you sure?</p>
          <div className={css.buttonList}>
            <button
              className={css.buttonYes}
              type="button"
              onClick={() => toggleSure()}
            >
              YES
            </button>
            <button
              className={css.buttonNo}
              type="button"
              onClick={toggleSureNo}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
