import ContractWidgetContextProvider from "../../contexts/contractWidget";
import EmailVerifiedMiddleware from "../../middlewares/emailverified";
import Aside from "../../widgets/Dashboard/Aside";
import Main from "../../widgets/Contract/Detail";

const ContractPage = () => {
  return (
    <EmailVerifiedMiddleware>
      <ContractWidgetContextProvider>
        <Aside />
        <Main page="transaction" url="transaction?page_size=10" />{" "}
      </ContractWidgetContextProvider>
    </EmailVerifiedMiddleware>
  );
};

export default ContractPage;
