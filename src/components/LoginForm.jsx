import React from "react";
import styles from "./SignUpForm.module.css";
import myImg from "../images/Union.png"
import { Link } from "react-router-dom";
function LoginForm() {
  return (
    <div>
      <div className={styles.container}>
        <h1>بوت کمپ بوتواستارت</h1>
        <form className={styles.form} style={{height:"523px"}} >
          <div>
            <img src={myImg} alt="" />
            <h1>فرم ورود</h1>
          </div>
          <input type="text" placeholder="نام کاربری" />
          <input type="text" placeholder="رمز عبور" />

          <button>ورود </button>
          <span>
            <Link to="/">ایجاد حساب کاربری!</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
