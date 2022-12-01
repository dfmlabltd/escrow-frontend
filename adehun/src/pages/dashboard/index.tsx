import "@rainbow-me/rainbowkit/styles.css";
import EmailVerifiedMiddleware from "../../middlewares/emailverified";
import Aside from "../../widgets/Dashboard/Aside";
import Main from "../../widgets/Dashboard/Main";
import Invoice from "../../widgets/Dashboard/contract";

const DashboardPage: React.FC = () => {
  return (
    <EmailVerifiedMiddleware>
      <Aside />
      <Main />
      <Invoice />
    </EmailVerifiedMiddleware>
  );
};

export default DashboardPage;
