import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import EmailChangePage from "./pages/email";
import HomePage from "./pages";
import LoginVerifyPage from "./pages/login/verify";
import DashboardPage from "./pages/dashboard";
import EmailVerifyPage from "./pages/email/verify";
import ContractPage from "./pages/contract";
import ReceiptPage from "./pages/receipt";
import TransactionPage from "./pages/transaction";
import LogoutPage from "./pages/logout";

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
        <Route path="contract" element={<ContractPage />} />
        <Route path="receipt" element={<ReceiptPage />} />
        <Route path="transaction" element={<TransactionPage />} />
        <Route path="logout" element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
