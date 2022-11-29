import "@rainbow-me/rainbowkit/styles.css";
import EmailVerifiedMiddleware from "../../middlewares/emailverified";
import Aside from "../../widgets/Dashboard/Aside";
import Main from "../../widgets/Dashboard/Main";
import Invoice from "../../components/dash/Invoice";
import { useState } from "react";

const DashboardPage: React.FC = () => {
  const [isToggleInvoice, toggleInvoice] = useState<boolean>(true);

  return (
    <EmailVerifiedMiddleware>
      <Aside />
      <Main />
      <Invoice
        isToggleInvoice={isToggleInvoice}
        toggleInvoice={toggleInvoice}
      />
    </EmailVerifiedMiddleware>
  );
};

export default DashboardPage;
