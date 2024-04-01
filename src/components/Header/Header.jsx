import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsLogout } from "../../redux/modal/modalSlice";
import { selectIsLogout } from "../../redux/modal/selectors";
import { LeaveModal } from "../Modals/LeaveModal/LeaveModal";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isOpen = useSelector(selectIsLogout);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(toggleIsLogout());
  };

  // console.log(user);
  return (
    <header className={css.header}>
      <NavLink to="/">
        <img alt="logo icon" src="logo.svg" />
      </NavLink>
      {!isLoggedIn ? (
        ""
      ) : (
        <>
          <div className={css.headerRightMobile}>
            <div
              className={css.user}
              style={{
                backgroundImage: `url(${user.avatarUrl})`,
                backgroundSize: "cover",
              }}
            ></div>
            <img alt="logout icon" onClick={handleLogout} src="/logout.svg" />
          </div>
          <div className={css.headerRightDesktop}>
            <div
              className={css.user}
              style={{
                backgroundImage: `url(${user.avatarUrl})`,
                backgroundSize: "cover",
              }}
            ></div>
            <p className={css.name}>{user.email}</p>
            <button type="button" onClick={handleLogout} className={css.exit}>
              Exit
            </button>
            {isOpen && <LeaveModal />}
          </div>
        </>
      )}
    </header>
  );
};
