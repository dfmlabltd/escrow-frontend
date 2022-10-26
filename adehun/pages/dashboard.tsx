import { ReactElement } from "react";
import { NextPageWithLayout } from "../interface/page";
import AuthMiddleware from "../middlewares/auth";
import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useSignMessage } from "wagmi";

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
  return <AuthMiddleware>{page}</AuthMiddleware>;
};

export default DashboardPage;
