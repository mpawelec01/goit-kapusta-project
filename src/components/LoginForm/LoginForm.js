import css from "./LoginForm.module.css";
import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Button from "./Button/Button";
import { useDispatch } from 'react-redux';
import { logIn, register } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true); // Stan wewnętrzny określający, czy użytkownik chce się zalogować (true) czy zarejestrować (false)

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    // Jeśli użytkownik chce się zalogować
    if (isLogin) {
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    } else { // Jeśli użytkownik chce się zarejestrować
      dispatch(
        register({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    }
    form.reset();
  };

  return (
    <div className={css.container}>
      <Logo/>
      <div className={css.form_container}>
        <p>Zaloguj się przy pomocy konta Google</p>
        <button className={css.google_btn}>
          <img
            src="https://e7.pngegg.com/pngimages/326/85/png-clipart-google-logo-google-text-trademark.png"
            alt="Google"
          />
          Google
        </button>
        <p>Lub przy pomocy adresu e-mail i hasła, po zarejestrowaniu</p>
     
        <form onSubmit={handleSubmit}>
          <label className={css.label}>Email</label>
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="example: user@user.com"
            required
          ></input>
          <label className={css.label}>Password</label>
          <input
            className={css.input}
            type="password"
            name="password"
            required
          ></input>

        </form>
        <div className={css.buttons}> {/* Dodaj kontener na przyciski */}
          <Button onClick={() => setIsLogin(true)} style={{ marginRight: '10px' }}>
            Login
          </Button>
          <Button onClick={() => setIsLogin(false)}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
