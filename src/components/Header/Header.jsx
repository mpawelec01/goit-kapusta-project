import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import { useState } from "react";

export const Header = () => {

  // dodany state dla testów 
  // po przełączeniu na true odpala się header na telefony/desktop w zależności od rozdzielczości
  const [isLoggedIn, setIsLoggedIn] = ("");

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
            <img src="/logout.svg" />
          </div>
          <div className={css.headerRightDesktop}>
            <div className={css.user}>U</div>
            <p className={css.name}>User Name</p>
            <p className={css.exit}>Exit</p>
          </div>
        </>
      )}
    </header>
  );
};
