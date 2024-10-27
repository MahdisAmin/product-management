import React from "react";
import "../styles/AddModal.css";

import { useForm } from "react-hook-form";
import { addProductsMutation } from "../services/mutations";
import { useQueryClient } from "@tanstack/react-query";

function AddModal({ isOpen, onClose, onCreat }) {
  const queryClient= useQueryClient()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addProducts = addProductsMutation();
  const onSubmit = (data) => {
    addProducts.mutate({
      name: data.name,
      price: data.price,
      quantity: data.quantity,
    },{
      onSuccess: () => {
        queryClient.invalidateQueries("products");
      }
      }),
      onCreat(data);
    reset()
    onClose();
  };

  if (!isOpen) return;
  return (
    <div className="modal">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>ایجاد محصول جدید</h2>
          <label htmlFor="">نام کالا</label>
          <input
            placeholder="نام کالا"
            type="text"
            {...register("name", { required: "نام محصول اجباریست" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <label htmlFor="">تعداد موجودی</label>
          <input
            type="number"
            placeholder="تعداد"
            {...register("quantity", {
              required: "تعداد را وارد کنید",
              min: { value: 0, message: "تعداد باید بیشتر از 0 باشد" },
            })}
          />
          {errors.quantity && <span>{errors.quantity.message}</span>}
          <label htmlFor="">قیمت</label>
          <input
            type="number"
            placeholder="قیمت"
            {...register("price", {
              required: "قیمت را وارد کنید",
              min: { value: 0, message: "قیمت باید بیشتر از 0 باشد" },
            })}
          />
          {errors.price && <span>{errors.price.message}</span>}
          <div className="btnHolder">
            <button className="first" type="submit">
              ایجاد
            </button>
            <button className="last" type="button" onClick={onClose}>
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
