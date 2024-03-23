import css from "./LoginForm.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, logIn } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

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
          <input
            className={css.input}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example: user@user.com"
            required
          />
          <label htmlFor="password" className={css.label}>
            Password:
          </label>
          <input
            className={css.input}
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
