import "@rainbow-me/rainbowkit/styles.css";
import EmailVerifiedMiddleware from "../middlewares/emailverified";
import Aside from "./dashboard/Aside";
import Main from "./dashboard/Main";

const DashboardPage: React.FC = () => {
  return (
    <EmailVerifiedMiddleware>
      <Aside />
      <Main />
    </EmailVerifiedMiddleware>
  );
};

export default DashboardPage;
