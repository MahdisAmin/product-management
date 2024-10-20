import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
