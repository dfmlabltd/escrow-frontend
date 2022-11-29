import "@rainbow-me/rainbowkit/styles.css";
import EmailVerifiedMiddleware from "../../middlewares/emailverified";
import Aside from "./Aside";
import Main from "./Main";
import Invoice from "../../components/dash/Invoice";

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
