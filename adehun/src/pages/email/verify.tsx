import { useCallback } from "react";
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
import {
  DASHBOARD_PAGE,
  EMAIL_CHANGE_PAGE,
  REDIRECT_TO_AFTER,
} from "../../utils/constants";

const EmailVerifyPage: React.FC = () => {
  const { setCode, verifyEmail, error } = useVerifyEmail();

  const { isLoading, startLoading, stopLoading } = useLoading();

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
      navigate(sessionStorage.getItem(REDIRECT_TO_AFTER) ?? DASHBOARD_PAGE);
    };
    _verifyEmail();
  }, [verifyEmail, toast, error, stopLoading, startLoading, navigate]);

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

  return (
    <EmailVerifiedMiddleware>
      <AuthLayout title="email verification page">
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
      </AuthLayout>
    </EmailVerifiedMiddleware>
  );
};

export default EmailVerifyPage;
