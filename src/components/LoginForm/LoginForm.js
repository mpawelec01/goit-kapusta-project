import css from "./LoginForm.module.css";
import React, { useState } from "react";
import Logo from "./Logo/Logo";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, logIn, googleLogIn } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { ReactComponent as GoogleIcon } from "../../img/google-icon.svg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setEmailError(!email);
      setPasswordError(!password);
      return;
    }

    const user = {
      email: email,
      password: password,
    };
    console.log("Formularz wysłany!");
    dispatch(register(user));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setEmailError(!email);
      setPasswordError(!password);
      return;
    }

    const user = {
      email: email,
      password: password,
    };
    console.log("Formularz wysłany!");
    dispatch(logIn(user));
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();

    dispatch(googleLogIn());
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
          {emailError && <p className={css.errorStar}>* </p>} Email:
          </label>
          <input
            className={`${css.inputs} ${emailError ? css.error : ''}`}
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            placeholder="your@email.com"
            required
          />
          {emailError && <p className={css.errorMessage1}>This is a required field</p>}
          <label htmlFor="password" className={css.titles}>
          {emailError && <p className={css.errorStar}>* </p>} Password:
          </label>
          <input
            className={`${css.inputs} ${passwordError ? css.error : ''}`}
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
          />
          {passwordError && <p className={css.errorMessage2}>This is a required field</p>}
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
