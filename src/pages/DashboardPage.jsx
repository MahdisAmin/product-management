import React from "react";

import "./Dashboard.css";

import SearchDashboard from "../components/SearchDashboard";

function DashboardPage() {
  return (
    <>
      <SearchDashboard />
      <div className="addContainer">
        <div>
          <p>مدیرت کالا</p>
        </div>
        <div>
          <button>افزودن محصول</button>
        </div>
      </div>
          <table>
              <tr>
                  <th>نام کالا</th>
                  <th>موجودی</th>
                  <th>قیمت</th>
                  <th>شناسه کالا</th>
                  <th></th>
              </tr>
      </table>
    </>
  );
}

export default DashboardPage;
