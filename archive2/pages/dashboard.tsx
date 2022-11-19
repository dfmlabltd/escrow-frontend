import { ReactElement } from "react";
import { NextPageWithLayout } from "../interface/page";
import EmailVerifiedMiddleware from "../middlewares/emailverified";
import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSignMessage } from "wagmi";

const DashboardPage: NextPageWithLayout = () => {
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: "gm wagmi frens",
  });
  return (
    <>
      <ConnectButton />
      <button disabled={isLoading} onClick={() => signMessage()}>
        Sign message
      </button>
      {isSuccess && <div>Signature: {data}</div>}
      {isError && <div>Error signing message</div>}
    </>
  );
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <EmailVerifiedMiddleware>{page}</EmailVerifiedMiddleware>;
};

export default DashboardPage;
