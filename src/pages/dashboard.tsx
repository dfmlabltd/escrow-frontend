import EmailVerifiedMiddleware from "../middlewares/emailverified";
import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSignMessage } from "wagmi";

const DashboardPage: React.FC = () => {
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: "gm wagmi frens",
  });
  return (
    <EmailVerifiedMiddleware>
      {" "}
      <ConnectButton />
      <button disabled={isLoading} onClick={() => signMessage()}>
        Sign message
      </button>
      {isSuccess && <div>Signature: {data}</div>}
      {isError && <div>Error signing message</div>}
    </EmailVerifiedMiddleware>
  );
};

export default DashboardPage;
