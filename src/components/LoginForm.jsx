import React from "react";
import styles from "../styles/SignUpForm.module.css";
import myImg from "../images/Union.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../services/mutations";
import { setCookie } from "../utils/cookie";
import { toast } from "react-toastify";

function LoginForm() {
  const navigate = useNavigate();
  const { mutateAsync } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await mutateAsync(
      { username: data.user, password: data.pass },
      {
        onSuccess: (response) => {
          setCookie("token", response.data?.token);
          toast.success("ورود با موفقیت انجام شد", { autoClose: 3000 });
          navigate("/");
        },
        onError: (error) => {
          if (error.response?.data?.message === "Invalid credentials") {
            toast.error(
              " کاربری با این مشخصات یافت نشد یا رمز عبور اشتباه است",
              { autoClose: 3000 }
            );
          } else {
            toast.error("مشکلی پیش آمد", {
              autoClose: 3000,
            });
          }
        },
      }
    );
  };

  return (
    <div className={styles.container}>
      <h1>بوت کمپ بوتواستارت</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <img src={myImg} alt="" />
          <h1>فرم ورود</h1>
        </div>

        <input
          type="text"
          placeholder="نام کاربری"
          {...register("user", { required: "نام کاربری اجباریست" })}
        />
        {errors.user && <span>این فیلد اجباریست</span>}

        <input
          type="password"
          placeholder="رمز عبور"
          {...register("pass", { required: "رمز عبور اجباریست" })}
        />
        {errors.pass && <span>این فیلد اجباریست</span>}

        <button>ورود</button>
        <Link to="/register">ایجاد حساب کاربری!</Link>
      </form>
    </div>
  );
}

export default LoginForm;
