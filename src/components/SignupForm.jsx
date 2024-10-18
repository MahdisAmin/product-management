import React, { useState } from "react";
import styles from "./SignUpForm.module.css";
import myImg from "../images/Union.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function SignupForm({ setStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userName || !password || !confirmPass) {
      alert("All field requires");
      return;
    }
    if (confirmPass !== password) {
      alert("passwords dont mactch");
      return;
    }
    setStep(2);
    console.log("Sign up successfull");
  };
  return (
    <div className={styles.container}>
      <h1>بوت کمپ بوتواستارت</h1>
      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        <div>
          <img src={myImg} alt="" />
          <h1>فرم ثبت نام</h1>
        </div>
        <label htmlFor="user"></label>
        <input
          type="text"
          placeholder="نام کاربری"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          id="user"
          {...register("user", { required: true })}
        />
        {errors.user && <span>این فیلد اجباریست</span>}
        <label htmlFor="pass"></label>

        <input
          type="text"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="pass"
          {...register("pass", { required: true })}
        />
        {errors.pass && <span>این فیلد اجباریست</span>}
        <label htmlFor="confirm"></label>

        <input
          type="text"
          placeholder="تکرار رمز عبور"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          id="confirm"
          {...register("confirm", { required: true })}
        />
        {errors.confirm && <span>این فیلد اجباریست</span>}

        <button>ثبت نام</button>
        <span>
          <Link to="login">حساب کاربری دارید؟</Link>
        </span>
      </form>
    </div>
  );
}

export default SignupForm;
