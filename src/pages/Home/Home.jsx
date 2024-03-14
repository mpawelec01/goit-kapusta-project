import React, { useState } from "react";
import css from "./Home.module.css";
import Logo from "../../img/background/logo-kapusta.png";
import {Header} from '../../components/Header/Header';
// import LoginForm from '../../components/LoginForm/LoginForm';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formularz wysłany!");
  };

  return (
    <>
    <Header />
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
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Hasło:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div className={css.buttons}>
            <button type="submit">Login</button>
            <button type="submit"> Registration </button>
          </div>
          {/* <LoginForm/> */}
        </div>
      </div>
    </>
  );
}

export default App;
