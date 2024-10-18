import React, { useState } from "react";
import styles from "./SignUpForm.module.css"
import myImg from "../images/Union.png"
import { Link } from "react-router-dom";
function SignupForm({ setStep}) {
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPass, setConfirmPass] = useState("");

  const submitHandler = (e) => {
     e.preventDefault()
     if (!userName || !password || !confirmPass) {
       alert("All field requires");
       return
     }
     if (confirmPass !== password) {
       alert("passwords dont mactch");
       return
     }
     setStep(2)
     console.log("Sign up successfull");
     
     
   };
  return (
    <div className={styles.container}>
      <h1>بوت کمپ بوتواستارت</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <img src={myImg} alt="" />
          <h1>فرم ثبت نام</h1>
        </div>
        <input
          type="text"
          placeholder="نام کاربری"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="تکرار رمز عبور"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button>ثبت نام</button>
        <span>
          <Link to="login">حساب کاربری دارید؟</Link>
        </span>
      </form>
    </div>
  );
}

export default SignupForm;
