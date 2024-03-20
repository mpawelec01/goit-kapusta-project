import React from 'react'
import css from "./Logo.module.css";
import logo from "../../../img/background/logo-kapusta.png";


function Logo() {
  return (
    <div>
        <div className={css.logo_mainpage}>
            <img alt="logo" src={logo} />
        </div>
    </div>
  )
}

export default Logo
