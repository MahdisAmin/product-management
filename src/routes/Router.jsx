import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import React from "react";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

import { getCookie } from "../utils/cookie";
import PageNotFound from "../pages/404";
import AuthProvider from "../providers/AuthProvider";

function Router() {
  const token = getCookie("token");
  console.log(token);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <DashboardPage />
            </AuthProvider>
          }
        />
        <Route path="register" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
