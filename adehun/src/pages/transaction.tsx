import ContractWidgetContextProvider from "../contexts/contractWidget";
import EmailVerifiedMiddleware from "../middlewares/emailverified";
import Aside from "../widgets/Dashboard/Aside";
import Transaction from "../widgets/Transaction";

const TransactionPage = () => {
  return (
    <EmailVerifiedMiddleware>
      <ContractWidgetContextProvider>
        <Aside />
        <Transaction page="transaction" url="transaction?page_size=10" />{" "}
      </ContractWidgetContextProvider>
    </EmailVerifiedMiddleware>
  );
};

export default TransactionPage;
