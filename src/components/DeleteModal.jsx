import React from "react";
import "../styles/DeleteModal.css";
import deleteimg from "../images/Close.png";
function DeleteModal({ isOpen, onClose, onDelete }) {
  if (!isOpen) return null;

  return (
    <div className="delete-modal-container">
      <div className="delete-modal">
        <img src={deleteimg} alt="" />
        <h3>آیا از حذف محصول مطمئنید؟</h3>
        <div className="buttonHolder">
          <button className="delete-btn" onClick={onDelete}>
            حذف
          </button>
          <button className="cancel-btn" onClick={onClose}>
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
