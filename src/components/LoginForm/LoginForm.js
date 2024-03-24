import css from "./LoginForm.module.css";
import React, { useState } from "react";
import Logo from "./Logo/Logo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, logIn } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import google from "../../img/icon-google.svg";
import { ReactComponent as GoogleIcon } from '../../img/google-icon.svg';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    console.log("Formularz wysłany!");
    dispatch(register(user));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    console.log("Formularz wysłany!");
    dispatch(logIn(user));
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/main" />;
  }

  return (
    <div className={css.container}>
      <div className={css.form_container}>
        <p>Zaloguj się przy pomocy konta Google</p>
        <a href="http://localhost:4000/auth/google" className={css.google_btn}>
          <img
            src="https://e7.pngegg.com/pngimages/326/85/png-clipart-google-logo-google-text-trademark.png"
            alt="Google"
          />
          Google
        </a>
        <p>Lub przy pomocy adresu e-mail i hasła, po zarejestrowaniu</p>
        <form>
          <label htmlFor="email" className={css.label}>
            Email:
          </label>
    <div className={css.container}>  
      <div className={css.loginformLogo}>
        <Logo/>
      </div>
      <div className={css.formContainer} >
        <form className={css.form} >
          <p className={css.firstText}>
            You can log in with your Google Account
          </p>
          <div className={css.googleLogin}>
            <Link className={css.google_btn}
              to={
                "" //link do google account
              }
            >
              <GoogleIcon/>
              <p className={css.googleBtnText}>Google</p>
            </Link>
          </div>
          <p className={css.secondText}>Or log in using an email and password, after registering:</p>
          <label htmlFor="email" className={css.titles}>Email:</label>
          <input
            className={css.inputs}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />
          <label htmlFor="password" className={css.label}>
            Password:
          </label>
          <label htmlFor="password" className={css.titles}>Password:</label>
          <input
            className={css.inputs}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className={css.buttons}>
            <button type="submit" className={css.button} onClick={handleLogin}>
              Login
            </button>
            <button
              type="submit"
              className={css.button}
              onClick={handleRegister}
            >
              Registration
            </button>
            <button onClick={handleLogin} className={css.submitButton}>LOG IN</button>
            <button onClick={handleRegister} className={css.submitButton}>REGISTRATION</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;