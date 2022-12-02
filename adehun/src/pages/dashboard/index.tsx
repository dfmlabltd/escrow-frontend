import "@rainbow-me/rainbowkit/styles.css";
import EmailVerifiedMiddleware from "../../middlewares/emailverified";
import Aside from "../../widgets/Dashboard/Aside";
import Main from "../../widgets/Dashboard/Main";
import Contract from "../../widgets/Dashboard/Contract";
import ContractWidgetContextProvider from "../../contexts/contractWidget";

const DashboardPage: React.FC = () => {
  return (
    <EmailVerifiedMiddleware>
      <ContractWidgetContextProvider>
        <Aside />
        <Main />
        <Contract />
      </ContractWidgetContextProvider>
    </EmailVerifiedMiddleware>
  );
};

export default DashboardPage;
