import styles from "./SignUpForm.module.css";
import myImg from "../images/Union.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRegister } from "../services/mutations";
function SignupForm() {
  console.log("rendering registerPage");
  const navigate = useNavigate();

  const { mutate } = useRegister();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const [passwordError, setPasswordError] = useState("");

  const submitHandler = (data) => {
    const isValid = trigger();
    if (!isValid) return;

    if (data.pass !== data.confirm) {
      setPasswordError("رمز عبور مطابقت ندارد");
      return;
    }
    setPasswordError("");

    console.log(data.user, data.pass);

    mutate(
      {
        username: data.user,
        password: data.pass,
      },
      {
        onSuccess: (data) => {
          console.log(data.data.message);
          navigate("login");
        },
        onError: (error) => {
          console.log(error.respose?.data?.message);
        },
      }
    );
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
          id="user"
          {...register("user", { required: "نام کاربری اجباریست" })}
        />
        {errors.user && <span>{errors.user.message}</span>}

        <label htmlFor="pass"></label>
        <input
          type="text"
          placeholder="رمز عبور"
          id="pass"
          {...register("pass", { required: "رمز عبور اجباریست" })}
        />
        {errors.pass && <span>{errors.pass.message}</span>}

        <label htmlFor="confirm"></label>
        <input
          type="text"
          placeholder="تکرار رمز عبور"
          id="confirm"
          {...register("confirm", {
            required: "تکرار رمز عبور اجباریست",
          })}
        />
        {errors.confirm && <span>{errors.confirm.message}</span>}
        {passwordError && <span>{passwordError}</span>}

        <button>ثبت نام</button>
        <span>
          <Link to="login">حساب کاربری دارید؟</Link>
        </span>
      </form>
    </div>
  );
}

export default SignupForm;
