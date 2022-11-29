import "@rainbow-me/rainbowkit/styles.css";
import EmailVerifiedMiddleware from "../middlewares/emailverified";
import Aside from "./dashboard/Aside";
import Main from "./dashboard/Main";
import Invoice from "../components/dash/Invoice";

const DashboardPage: React.FC = () => {
  return (
    <>
      <Aside />
      <Main />
      <Invoice />
    </>
  );
};

export default DashboardPage;
