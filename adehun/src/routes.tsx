import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import EmailChangePage from "./pages/email";
import HomePage from "./pages";
import LoginVerifyPage from "./pages/login/verify";
import DashboardPage from "./pages/dashboard";
import EmailVerifyPage from "./pages/email/verify";

const PageRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="email" element={<EmailChangePage />} />
        <Route path="email/verify" element={<EmailVerifyPage />} />
        <Route path="login/verify" element={<LoginVerifyPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
