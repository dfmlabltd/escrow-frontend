import "@rainbow-me/rainbowkit/styles.css";
import EmailVerifiedMiddleware from "../middlewares/emailverified";
import Aside from "../widgets/Dashboard/Aside";
import Dashboard from "../widgets/Dashboard";
import Contract from "../widgets/Contract";
import ContractWidgetContextProvider from "../contexts/contractWidget";

const DashboardPage: React.FC = () => {
  return (
    <EmailVerifiedMiddleware>
      <ContractWidgetContextProvider>
        <Aside />
        <Dashboard />
        <Contract />
      </ContractWidgetContextProvider>
    </EmailVerifiedMiddleware>
  );
};

export default DashboardPage;
