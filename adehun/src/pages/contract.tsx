import "@rainbow-me/rainbowkit/styles.css";
import EmailVerifiedMiddleware from "../middlewares/emailverified";
import Aside from "../widgets/Dashboard/Aside";
import ContractWidgetContextProvider from "../contexts/contractWidget";
import ContractMain from "../widgets/Dashboard/Contract/ContractMain";

const ContractPage: React.FC = () => {
  return (
    <EmailVerifiedMiddleware>
      <ContractWidgetContextProvider>
        <Aside />
        <ContractMain />
      </ContractWidgetContextProvider>
    </EmailVerifiedMiddleware>
  );
};

export default ContractPage;
