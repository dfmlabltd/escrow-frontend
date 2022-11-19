import { Tooltip } from "flowbite-react";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";

import useLoading from "../../hooks/loading";
import useSendOTK from "../../hooks/user/sendEmailOtk";
import useVerifyEmail from "../../hooks/user/verifyEmail";
import { NextPageWithLayout } from "../../interface/page";
import AuthLayout from "../../layout/auth";
import EmailVerifiedMiddleware from "../../middlewares/emailverified";

const EmailVerifyPage: NextPageWithLayout = () => {
  const { setCode, verifyEmail, error } = useVerifyEmail();

  const [codeCache, setCodeCache] = useState<string>("");

  const { isLoading, startLoading, stopLoading } = useLoading();

  const { sendOTK } = useSendOTK();

  const router = useRouter();

  useEffect(() => {
    if (codeCache) {
      setCode(codeCache);
    }
  }, [codeCache, setCode]);

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
              label="Verify your Email"
              text="Verify your Email"
              onClick={async (e) => {
                e.preventDefault();
                startLoading();
                if (!error) {
                  await verifyEmail();
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
                onClick={async (e) => {
                  e.preventDefault();
                  startLoading();
                  await sendOTK();
                  stopLoading();
                }}
                className="font-bold text-secondary"
              >
                Resend&nbsp;
              </span>
              <span>or</span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/email";
                }}
                className="font-bold text-secondary"
              >
                change email
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
    <EmailVerifiedMiddleware>
      <AuthLayout title="email verification page">{page}</AuthLayout>{" "}
    </EmailVerifiedMiddleware>
  );
};

export default EmailVerifyPage;
