import ContractWidgetContextProvider from "../contexts/contractWidget";
import EmailVerifiedMiddleware from "../middlewares/emailverified";
import Aside from "../widgets/Dashboard/Aside";
import Transaction from "../widgets/Transaction";

const TransactionPage = () => {
  return (
    <EmailVerifiedMiddleware>
      <ContractWidgetContextProvider>
        <Aside />
        <Transaction />{" "}
      </ContractWidgetContextProvider>
    </EmailVerifiedMiddleware>
  );
};

export default TransactionPage;
