import React, { useState, useEffect } from "react";
import "../styles/AddModal.css";

function EditModal({ isOpen, onClose, onSave, product }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setPrice(product.price || "");
      setQuantity(product.quantity || "");
    }
  }, [product]);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      id: product.id,
      name,
      price,
      quantity,
    });
  };

  return (
    <div className="modal">
      <form onSubmit={handleSave}>
        <h2>ویرایش محصول</h2>
        <label htmlFor="">نام کالا</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام کالا"
        />

        <label htmlFor="">قیمت</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="قیمت"
        />

        <label htmlFor="">تعداد</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="تعداد"
        />

        <div className="btnHolder">
          <button className="first" type="submit">
            ویرایش
          </button>
          <button className="last" type="button" onClick={onClose}>
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditModal;