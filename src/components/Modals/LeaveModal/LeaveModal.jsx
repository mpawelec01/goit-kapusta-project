import { useDispatch } from "react-redux";
import css from "./LeaveModal.module.css";
import { toggleIsLogout } from "../../../redux/modal/modalSlice";
import { logOut } from "../../../redux/auth/operations";

export const LeaveModal = () => {
  const dispatch = useDispatch();

  const toggleLogoutYes = () => {
    dispatch(toggleIsLogout());
    return dispatch(logOut());
  };

  const toggleLogoutNo = () => {
    dispatch(toggleIsLogout());
  };

  return (
    <section className={css.backdrop}>
      <div className={css.leaveModal}>
        <button
          className={css.closeModal}
          type="button"
          onClick={toggleLogoutNo}
        >
          X
        </button>
        <div className={css.container}>
          <p>Do you really wanna leave?</p>
          <div className={css.buttonList}>
            <button
              className={css.buttonYes}
              type="button"
              onClick={toggleLogoutYes}
            >
              YES
            </button>
            <button
              className={css.buttonNo}
              type="button"
              onClick={toggleLogoutNo}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
