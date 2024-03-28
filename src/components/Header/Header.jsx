import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import { useNavigate } from "react-router-dom"; // Added for navigation

import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations"; // Adjust based on your actual logout action
import { LeaveModal } from "../Modals/LeaveModal/LeaveModal";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Used for redirect after logout

  const handleLogout = async () => {
    await dispatch(logOut()); // Assuming logOut is an async thunk
    navigate("/"); // Redirect to home or login page after logout
  };

  return (
    <header className={css.header}>
      <NavLink to="/">
        <img alt="logo icon" src="/logo.svg" />
      </NavLink>
      {!isLoggedIn ? (
        ""
      ) : (
        <>
          <div className={css.headerRightMobile}>
            <div className={css.user}>U</div>
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
          </div>
        </>
      )}
    </header>
  );
};
