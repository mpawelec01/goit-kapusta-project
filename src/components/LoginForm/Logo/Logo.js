import React from 'react'
import css from "./Logo.module.css";
import logo from "../../../img/background/logo-kapusta.png";



export default function Logo() {
  return (
    <div className={css.logo} to="/">
        <picture className={css.LogoKapusta}>
          <source
            srcSet={`${logo} 1x`}
            media="(min-width: 1280px)"
            width="377"
            height="139"
          />
          <source
            srcSet={`${logo} 1x`}
            media="(min-width: 768px)"
            width="306"
            height="101"
          />
          <source
            srcSet={`${logo} 1x`}
            media="(max-width: 767px)"
            width="90"
            height="31"
          />

          <img src={logo} alt="2" />
        </picture>
    </div>
  );
}
