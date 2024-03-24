import css from "./LoginForm.module.css";
import React, { useState } from "react";
import Logo from "./Logo/Logo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, logIn } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import google from "../../img/icon-google.svg";
import { ReactComponent as GoogleIcon } from "../../img/google-icon.svg";

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
      <div className={css.loginformLogo}>
        <Logo />
      </div>
      <div className={css.formContainer}>
        <form className={css.form}>
          <p className={css.firstText}>
            You can log in with your Google Account
          </p>
          <div className={css.googleLogin}>
            <a
              href="http://localhost:4000/auth/google"
              className={css.google_btn}
            >
              <GoogleIcon />
              <p className={css.googleBtnText}>Google</p>
            </a>
          </div>
          <p className={css.secondText}>
            Or log in using an email and password, after registering:
          </p>
          <label htmlFor="email" className={css.titles}>
            Email:
          </label>
          <input
            className={css.inputs}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />
          <label htmlFor="password" className={css.titles}>
            Password:
          </label>
          <input
            className={css.inputs}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={css.buttons}>
            <button onClick={handleLogin} className={css.submitButton}>
              LOG IN
            </button>
            <button onClick={handleRegister} className={css.submitButton}>
              REGISTRATION
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
