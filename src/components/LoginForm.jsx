import React, { useState } from "react";
import styles from "./SignUpForm.module.css";
import myImg from "../images/Union.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../services/mutations";
import { getCookie, setCookie } from "../utils/cookie";
function LoginForm() {
  const navigate = useNavigate();
  const { mutateAsync } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmin = async (data) => {
  
   await mutateAsync(
      {
        username: data.user,
        password: data.pass,
      },
      {
        onSuccess: (data) => {
          console.log(data.data);
          setCookie("token", data.data?.token);
          
          const token = getCookie("token");
          if (token) {
            navigate("/");
            window.location.reload()
            } else {
              console.log(" no token");
            }
       
        },
        onError: (error) => console.log(error.response.data.message),
      }
    );
  };

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

          <label htmlFor="user"></label>
          <input
            type="text"
            placeholder="نام کاربری"
            id="user"
            {...register("user", { required: true })}
          />
          {errors.user && <span>این فیلد اجباریست</span>}

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
          <Link to="/register">ایجاد حساب کاربری!</Link>
          {/* </span> */}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
