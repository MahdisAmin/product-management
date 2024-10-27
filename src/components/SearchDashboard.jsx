import React, { useEffect, useState } from "react";
import "../styles/Search.css";
import myImg from "../images/user.png";
import { CiLogout, CiSearch } from "react-icons/ci";
import useDebounce from "../hooks/useDebounce";

function SearchDashboard({ logOutHandler, products, onFilter }) {
  const [searchName, setSearchName] = useState("");
  const debouncedSearchName = useDebounce(searchName, 300);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const nameMatch = product?.name
        .toLowerCase()
        .includes(debouncedSearchName.toLowerCase());
      return nameMatch;
    });

    onFilter(filtered);
  }, [debouncedSearchName, products, onFilter]);

  return (
    <div className="container">
      <div className="logout-btn">
        <button onClick={logOutHandler}>
          خروج
          <CiLogout style={{ marginRight: "10px" }} />
        </button>
      </div>
      <div className="inputHolder">
        <div className="search">
          <CiSearch style={{ fontSize: "30px", height: "40px" }} />
          <input
            type="text"
            placeholder="جستجو کالا"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        <div className="userHolder">
          <div>
            <img src={myImg} alt="" />
          </div>
          <div>
            <p>نام کاربری</p>
            <p>مدیر</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchDashboard;
