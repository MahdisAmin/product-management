import React from "react";
import styles from "./SignUpForm.module.css"
import myImg from "../../public/images/Union.png"
function SignupForm() {
  return (
    <div className={styles.container}>
      <h1>بوت کمپ بوتواستارت</h1>
      <form className={styles.form}>
        <div>
          <img src={myImg} alt="" />
          <h1>فرم ثبت نام</h1>
        </div>
        <input type="text" placeholder="نام کاربری" />
        <input type="text" placeholder="رمز عبور" />
        <input type="text" placeholder="تکرار رمز عبور" />
        <button>ثبت نام</button>
        <span>
          <a href="">حساب کاربری دارید؟</a>
        </span>
      </form>
    </div>
  );
}

export default SignupForm;
