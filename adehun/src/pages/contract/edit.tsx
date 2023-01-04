import "@rainbow-me/rainbowkit/styles.css";
import EmailVerifiedMiddleware from "../../middlewares/emailverified";
import Aside from "../../widgets/Dashboard/Aside";
import ContractWidgetContextProvider from "../../contexts/contractWidget";
import Main from "../../widgets/Contract/ContractEditMain";

const ContractEditPage: React.FC = () => {
  return (
    <EmailVerifiedMiddleware>
      <ContractWidgetContextProvider>
        <Aside />
        <Main />
      </ContractWidgetContextProvider>
    </EmailVerifiedMiddleware>
  );
};

export default ContractEditPage;
