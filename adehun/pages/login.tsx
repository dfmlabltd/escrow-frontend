import { Tooltip } from "flowbite-react";
import { ReactElement } from "react";
import Button, { GradientButton1 } from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import { useEmailLogin } from "../hooks/authentication/emailLogin";
import { NextPageWithLayout } from "../interface/page";
import AuthLayout from "../layout/Auth";

const LoginPage: NextPageWithLayout = () => {
  const { email, handleEmail, error, handleLogin } = useEmailLogin();
  return (
    <>
      <div className="flex flex-col gap-4 pt-12">
        <div className="flex flex-col space-y-1">
          <Label text="Email Address" label="Email Address" />

          <Tooltip style="auto" content={error}>
            <Input
              onChange={(e) => {
                handleEmail(e.target.value);
              }}
              type="text"
              id="email"
              placeholder="Email Address"
            />{" "}
          </Tooltip>
          {/* <ToolTip text={error} label="login-email-input" /> */}
        </div>

        <div className="text-center py-3">
          <Button
            text="Login"
            label="login"
            onClick={(e) => {
              console.log(e.target.value);
            }}
          />
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
            onClick={() => {
              console.log("Sign in with your wallet");
            }}
          />
        </div>
      </div>
    </>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout title="login page">{page}</AuthLayout>;
};

export default LoginPage;
