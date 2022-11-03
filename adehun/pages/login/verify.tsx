import { Tooltip } from "flowbite-react";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";
import {
  useEmailLogin,
  useEmailLoginVerify,
} from "../../hooks/authentication/emailLogin";
import useLoading from "../../hooks/loading";
import { NextPageWithLayout } from "../../interface/page";
import AuthLayout from "../../layout/auth";
import NotAuthMiddleware from "../../middlewares/notauth";
import { CURRENT_USER_EMAIL } from "../../utils/constants";

const EmailVerifyPage: NextPageWithLayout = () => {
  const {
    setCode,
    error,
    handleVerify,
    verificationError,
    setVerificationError,
  } = useEmailLoginVerify();

  const { handleEmail, handleLogin } = useEmailLogin();

  const [codeCache, setCodeCache] = useState<string>("");

  const { isLoading, startLoading, stopLoading } = useLoading();

  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem(CURRENT_USER_EMAIL)) {
      router.push("/login");
    }
    if (codeCache && verificationError) {
      setVerificationError(() => "");
    }
    setCode(codeCache);
  }, [codeCache, router, setCode, setVerificationError, verificationError]);

  return (
    <>
      <div className="flex flex-col gap-4 pt-12 w-full">
        <div className="flex flex-col space-y-1">
          <Label text="Email Address" label="Email Address" />
          {error ? (
            <Tooltip style="dark" content={error}>
              <Input
                onChange={(e) => {
                  const value = e.target.value;
                  setCodeCache(value);
                }}
                autoFocus={true}
                value={codeCache ?? ""}
                type="text"
                id="code"
                placeholder="Input your verification code"
              />
            </Tooltip>
          ) : (
            <Input
              onChange={(e) => {
                const value = e.target.value;
                setCodeCache(value);
              }}
              value={codeCache ?? ""}
              autoFocus={true}
              type="text"
              id="code"
              placeholder="Input your verification code"
            />
          )}
        </div>
        <div className="text-center py-3">
          {isLoading ? (
            <Button label="Login to your Space" text="Loading..." />
          ) : (
            <Button
              label="Login to your Space"
              text="Login to your Space"
              onClick={async () => {
                startLoading();
                if (!error) {
                  await handleVerify();
                }
                stopLoading();
              }}
            />
          )}
        </div>
      </div>
      <div className="relative w-full py-4">
        <div className="flex justify-center items-center h-12">
          <div className="h-full flex">
            <span className="text-white text-base">
              Didn&apos;t receive Any verification code? Please&nbsp;
              <span
                onClick={() => {
                  const current_user_email =
                    sessionStorage.getItem(CURRENT_USER_EMAIL);
                  if (current_user_email) {
                    handleEmail(current_user_email);
                    handleLogin();
                  }
                }}
                className="font-bold text-secondary"
              >
                Resend
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

EmailVerifyPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <NotAuthMiddleware>
      <AuthLayout title="email verification page">{page}</AuthLayout>{" "}
    </NotAuthMiddleware>
  );
};

export default EmailVerifyPage;
