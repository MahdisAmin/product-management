import React from "react";
import styles from "./SignUpForm.module.css";
import myImg from "../images/Union.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmin = (data) => console.log(data);
  return (
    <div>
      <div className={styles.container}>
        <h1>بوت کمپ بوتواستارت</h1>
        <form
          className={styles.form}
          style={{ height: "533px" }}
          onSubmit={handleSubmit(onSubmin)}
        >
          <div>
            <img src={myImg} alt="" />
            <h1>فرم ورود</h1>
          </div>

          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="نام کاربری"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>این فیلد اجباریست</span>}

          <label htmlFor="pass"></label>
          <input
            type="text"
            placeholder="رمز عبور"
            id="pass"
            {...register("pass", { required: true })}
          />

          {errors.pass && <span>این فیلد اجباریست</span>}

          <button>ورود </button>
          {/* <span> */}
          <Link to="/">ایجاد حساب کاربری!</Link>
          {/* </span> */}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
