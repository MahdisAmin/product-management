import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import React from "react";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

import { getCookie } from "../utils/cookie";
import PageNotFound from "../pages/404";

function Router() {
  const token = getCookie("token");
  console.log(token);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <DashboardPage /> : <Navigate to="login" />}
        />
        <Route path="register" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;