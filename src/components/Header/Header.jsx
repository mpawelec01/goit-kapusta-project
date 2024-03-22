import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import { useEffect } from "react";

import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  console.log(user);
  return (
    <header className={css.header}>
      <NavLink to="/">
        <img src="/logo.svg" />
      </NavLink>
      {!isLoggedIn ? (
        ""
      ) : (
        <>
          <div className={css.headerRightMobile}>
            <div className={css.user}>U</div>
            <button onClick={handleLogout}>
              <img src="/logout.svg" />
            </button>
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
            <p onClick={handleLogout} className={css.exit}>
              Exit
            </p>
          </div>
        </>
      )}
    </header>
  );
};
