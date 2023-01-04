import ContractWidgetContextProvider from "../contexts/contractWidget";
import EmailVerifiedMiddleware from "../middlewares/emailverified";
import Aside from "../widgets/Dashboard/Aside";
import Receipt from "../widgets/Receipt";

const DetailPage = () => {
  return (
    <EmailVerifiedMiddleware>
      <ContractWidgetContextProvider>
        <Aside />
        <Receipt />{" "}
      </ContractWidgetContextProvider>
    </EmailVerifiedMiddleware>
  );
};

export default DetailPage;
