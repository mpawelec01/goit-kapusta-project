import css from "./LoginForm.module.css";
import React, { useState } from "react";
import Logo from "../../img/background/logo-kapusta.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formularz wysłany!");
  };

  return (
    <div className={css.container}>
      <div className={css.logo_mainpage}>
        <img alt="logo" src={Logo} />
      </div>
      <div className={css.form_container}>
        <p>Zaloguj się przy pomocy konta Google</p>
        <button className={css.google_btn}>
          <img
            src="https://e7.pngegg.com/pngimages/326/85/png-clipart-google-logo-google-text-trademark.png"
            alt="Google"
          />
          Google
        </button>
        <p>Lub przy pomocy adresu e-mail I hasla, po zarejestrowaniu</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className={css.label}>
            Email:
          </label>
          <input
            className={css.input}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={css.label} htmlFor="password">
            Hasło:
          </label>
          <input
            className={css.input}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div className={css.buttons}>
          <button className={css.button} type="submit">
            Login
          </button>
          <button className={css.button} type="submit">
            {" "}
            Registration{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
