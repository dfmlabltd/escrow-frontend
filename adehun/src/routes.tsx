import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import EmailChangePage from "./pages/email";
import HomePage from "./pages";
import LoginVerifyPage from "./pages/login/verify";
import DashboardPage from "./pages/dashboard";
import EmailVerifyPage from "./pages/email/verify";
import ContractCreatePage from "./pages/contract/create";
import ReceiptPage from "./pages/receipt";
import ContractDetailPage from "./pages/contract/detail";
import LogoutPage from "./pages/logout";
import ContractEditPage from "./pages/contract/edit";

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
        <Route path="contract/create" element={<ContractCreatePage />} />
        <Route path="contract/edit/:id" element={<ContractEditPage />} />
        <Route path="receipt" element={<ReceiptPage />} />
        <Route path="contract/:id" element={<ContractDetailPage />} />
        <Route path="logout" element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
