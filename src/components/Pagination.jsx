import React from "react";

import "../styles/pagination.css"
function Pagination({ currentPage, totalPage, onPageChange }) {
  const nextPageHandler = () => {
    if (currentPage < totalPage) {
      onPageChange(currentPage + 1);
    }
  };
  const previousPageHandler = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  return (
    <div className="pagination">
      <button onClick={previousPageHandler} disabled={currentPage === 1}>
        قبلی
      </button>
      {[...Array(totalPage)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={nextPageHandler} disabled={currentPage == totalPage}>
        بعدی
      </button>
    </div>
  );
}

export default Pagination;
