import { Tooltip } from "flowbite-react";
import { ReactElement, useEffect, useState } from "react";
import Button, { GradientButton1 } from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";
import { useEmailLogin } from "../../hooks/authentication/emailLogin";
import useWalletLogin from "../../hooks/authentication/walletLogin";
import useLoading from "../../hooks/loading";
import useToast from "../../hooks/toast";
import { NextPageWithLayout } from "../../interface/page";
import AuthLayout from "../../layout/Auth";
import NotAuthMiddleware from "../../middlewares/notauth";

const LoginPage: NextPageWithLayout = () => {
  const { handleEmail, error, handleLogin, loginError, setLoginError } =
    useEmailLogin();

  const [emailCache, setEmailCache] = useState("");

  const { isLoading, startLoading, stopLoading } = useLoading();

  const { handleLogin: handleWalletLogin } = useWalletLogin();

  const toast = useToast();

  useEffect(() => {
    if (emailCache && loginError) {
      setLoginError("");
    }
    handleEmail(emailCache);
  }, [emailCache]);
  return (
    <>
      <div className="flex flex-col gap-4 pt-12">
        <div className="flex flex-col space-y-1">
          <Label text="Email Address" label="Email Address" />
          {error ? (
            <Tooltip style="dark" content={error}>
              <Input
                onChange={(e) => {
                  const value = e.target.value;
                  setEmailCache(value);
                }}
                autoFocus={true}
                value={emailCache ?? ""}
                type="text"
                id="email"
                placeholder="Email Address"
              />
            </Tooltip>
          ) : (
            <Input
              onChange={(e) => {
                const value = e.target.value;
                setEmailCache(value);
              }}
              value={emailCache ?? ""}
              autoFocus={true}
              type="text"
              id="email"
              placeholder="Email Address"
            />
          )}
        </div>

        <div className="text-center py-3">
          {isLoading ? (
            <Button text="Loading...." label="login" />
          ) : (
            <Button
              text="Login"
              label="login"
              onClick={async (e) => {
                startLoading();
                if (!error) {
                  await handleLogin();
                }
                stopLoading();
              }}
            />
          )}
        </div>
      </div>
      <div className="relative w-full py-1">
        <div className="flex justify-center items-center h-12 authDivider">
          <div className="h-full flex">
            <p className="w-12 rounded-full flex items-center justify-center text-center bg-gray-800 z-50">
              <span className="text-white text-sm">ok</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col space-y-1"
        aria-labelledby="Alternative Sign In"
      >
        <div></div>
        <div className="text-center py-3">
          <GradientButton1
            text="Sign in with your wallet"
            label="Sign in with your wallet"
            onClick={async () => {
              await handleWalletLogin();
            }}
          />
        </div>
      </div>
    </>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <NotAuthMiddleware>
      <AuthLayout title="login page">{page}</AuthLayout>{" "}
    </NotAuthMiddleware>
  );
};

export default LoginPage;
