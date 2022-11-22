import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";
import grammar from "../../lang/en.json";

import useLoading from "../../hooks/loading";
import useToast from "../../hooks/toast";
import useSendOTK from "../../hooks/user/sendEmailOtk";
import useVerifyEmail from "../../hooks/user/verifyEmail";
import {
  ReactHTMLButtonEvent,
  ReactHTMLInputEvent,
  ReactHTMLSpanEvent,
} from "../../interface/types";
import AuthLayout from "../../layout/auth";
import EmailVerifiedMiddleware from "../../middlewares/emailverified";
import { EMAIL_CHANGE_PAGE } from "../../utils/constants";
import EmailSuccessWidget from "../../widgets/Emails/success";

const EmailVerifyPage: React.FC = () => {
  const { setCode, verifyEmail, error } = useVerifyEmail();

  const { isLoading, startLoading, stopLoading } = useLoading();

  const [success, setSuccess] = useState<boolean>(false);

  const { sendOTK, error: otkError } = useSendOTK();

  const { toast } = useToast();

  const navigate = useNavigate();

  const handleVerifyEmail = useCallback(() => {
    startLoading();
    const _verifyEmail = async () => {
      const success = await verifyEmail();
      if (!success) {
        toast.fire({
          icon: "error",
          title: error,
        });
        stopLoading();
        return;
      }
      setSuccess(true);
    };
    _verifyEmail();
  }, [verifyEmail, toast, error, stopLoading, startLoading, setSuccess]);

  const handleSendOTK = useCallback(() => {
    startLoading();
    const _sendOTK = async () => {
      const success = await sendOTK();
      if (!success) {
        toast.fire({
          icon: "error",
          title: otkError,
        });
        stopLoading();
        return;
      }
      toast.fire({
        icon: "success",
        title: grammar["VERIFICATION_CODE_SENT"],
      });
      stopLoading();
    };
    _sendOTK();
  }, [otkError, sendOTK, startLoading, toast, stopLoading]);

  const EmailWidget: React.FC = () => {
    return success ? (
      <EmailSuccessWidget />
    ) : (
      <>
        {" "}
        <div className="flex flex-col gap-4 pt-12 w-full">
          <div className="flex flex-col space-y-1">
            <Label aria-label="Email Address">Email Address</Label>
            <Input
              onChange={(e: ReactHTMLInputEvent) => {
                const value = e.target.value;
                setCode(value);
              }}
              autoFocus={true}
              type="text"
              id="code"
              placeholder="Input your verification code"
            />
          </div>
          <div className="text-center py-3">
            {isLoading ? (
              <Button aria-label="Loading button...">
                Login to your Space
              </Button>
            ) : (
              <Button
                aria-label="Verify your Email"
                onClick={async (e: ReactHTMLButtonEvent) => {
                  e.preventDefault();
                  handleVerifyEmail();
                }}
              >
                Verify your Email
              </Button>
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
                    handleSendOTK();
                  }}
                  className="font-bold text-secondary"
                >
                  Resend&nbsp;
                </span>
                <span>or</span>
                <span
                  onClick={(e: ReactHTMLSpanEvent) => {
                    e.preventDefault();
                    navigate(EMAIL_CHANGE_PAGE);
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

  return (
    <EmailVerifiedMiddleware>
      <AuthLayout title="email verification page">
        <EmailWidget />
      </AuthLayout>
    </EmailVerifiedMiddleware>
  );
};

export default EmailVerifyPage;
