import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./LoginForm.module.css";
import google from "../../img/icon-google.svg";
import Logo from "./Logo/Logo";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className={css.container}>  
        <div className={css.loginformLogo}>
          <Logo/>
        </div>
      <div className={css.formContainer} >
        <form className={css.form} onSubmit={handleSubmit}>
          <p className={css.firstText}>
            You can log in with your Google Account
          </p>
          <div className={css.googleLogin}>
            <Link className={css.google_btn}
              to={
                "" //link do google account
              }
            >
              <img src={google} alt="" />
              <p>Google</p>
            </Link>
          </div>
          <p className={css.secondText}>Or log in using an email and password, after registering:</p>
          <h5 className={css.titles}>Email</h5>
          <input
            className={css.inputs}
            type="email"
            placeholder="your@email.com"
          />
          <h5 className={css.titles}>Password</h5>
          <input
            className={css.inputs}
            type="password"
            placeholder="Password"
          />
          <div className={css.buttons}>
            <button className={css.submitButton}>LOG IN</button>
            <button className={css.submitButton}>REGISTRATION</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;