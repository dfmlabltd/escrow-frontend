import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";
import {
  useEmailLogin,
  useEmailLoginVerify,
} from "../../hooks/authentication/emailLogin";
import useLoading from "../../hooks/loading";
import useToast from "../../hooks/toast";
import {
  ReactHTMLButtonEvent,
  ReactHTMLInputEvent,
  ReactHTMLSpanEvent,
} from "../../interfaces";

import grammar from "../../lang/en.json";
import AuthLayout from "../../layout/auth";
import NotAuthMiddleware from "../../middlewares/notauth";
import { assertValidEmail } from "../../utils/assert";
import {
  CURRENT_USER_EMAIL,
  DASHBOARD_PAGE,
  LOGIN_PAGE,
  REDIRECT_TO_AFTER,
} from "../../utils/constants";

const LoginVerifyPage: React.FC = () => {
  const {
    setCode,
    error: emailVerifyError,
    handleVerify,
  } = useEmailLoginVerify();

  const { error: emailLoginError, setEmail, handleLogin } = useEmailLogin();

  const { isLoading, startLoading, stopLoading } = useLoading();

  const { toast } = useToast();

  const navigate = useNavigate();

  const verifyEmail = useCallback(() => {
    startLoading();
    const _handleVerify = async () => {
      const success = await handleVerify();

      if (!success) {
        toast.fire({
          icon: "error",
          title: emailVerifyError,
        });
        stopLoading();
        return;
      }

      navigate(sessionStorage.getItem(REDIRECT_TO_AFTER) ?? DASHBOARD_PAGE);
    };
    _handleVerify();
  }, [
    startLoading,
    stopLoading,
    toast,
    handleVerify,
    emailVerifyError,
    navigate,
  ]);

  const resendEmail = useCallback(() => {
    startLoading();

    const _handleLogin = async () => {
      const success = await handleLogin();

      if (!success) {
        toast.fire({
          icon: "error",
          title: emailLoginError,
        });
        stopLoading();
        return;
      }

      const VERIFICATION_CODE_SENT = grammar["VERIFICATION_CODE_SENT"];

      toast.fire({
        icon: "success",
        title: VERIFICATION_CODE_SENT,
      });
    };

    _handleLogin();
  }, [startLoading, stopLoading, toast, handleLogin, emailLoginError]);

  useEffect(() => {
    const current_user_email = sessionStorage.getItem(CURRENT_USER_EMAIL) ?? "";
    try {
      assertValidEmail(current_user_email);
      setEmail(current_user_email);
    } catch (e) {
      navigate(LOGIN_PAGE);
      return;
    }
  }, [setEmail, navigate]);

  return (
    <NotAuthMiddleware>
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
              <Button aria-label="Login to your Space">Loading...</Button>
            ) : (
              <Button
                aria-label="Login to your Space"
                onClick={async (e: ReactHTMLButtonEvent) => {
                  e.preventDefault();
                  verifyEmail();
                }}
              >
                Login to your Space
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
                  onClick={async (e: ReactHTMLSpanEvent) => {
                    e.preventDefault();
                    resendEmail();
                  }}
                  className="font-bold text-secondary"
                >
                  Resend
                </span>
              </span>
            </div>
          </div>
        </div>
      </AuthLayout>
    </NotAuthMiddleware>
  );
};

export default LoginVerifyPage;
