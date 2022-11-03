import { Tooltip } from "flowbite-react";
import { ReactElement, useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";
import useLoading from "../../hooks/loading";
import useChangeEmail from "../../hooks/user/changeEmail";
import { NextPageWithLayout } from "../../interface/page";
import AuthLayout from "../../layout/auth";
import EmailVerifiedMiddleware from "../../middlewares/emailverified";

const LoginPage: NextPageWithLayout = () => {
  const [emailCache, setEmailCache] = useState("");

  const { isLoading, startLoading, stopLoading } = useLoading();

  const { handleEmail, error, changeEmail } = useChangeEmail();

  useEffect(() => {
    if (emailCache != "") {
      handleEmail(emailCache);
    }
  }, [emailCache, handleEmail]);
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
              text="Change Email"
              label="Change Email"
              onClick={async (e) => {
                startLoading();
                if (!error) {
                  await changeEmail();
                }
                stopLoading();
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <EmailVerifiedMiddleware>
      <AuthLayout title="change email page">{page}</AuthLayout>{" "}
    </EmailVerifiedMiddleware>
  );
};

export default LoginPage;
