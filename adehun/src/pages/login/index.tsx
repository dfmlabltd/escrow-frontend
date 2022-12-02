import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button, { GradientButton } from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";
import { useEmailLogin } from "../../hooks/authentication/emailLogin";
import useWalletLogin from "../../hooks/authentication/walletLogin";
import useLoading from "../../hooks/loading";
import useToast from "../../hooks/toast";
import {
  ReactHTMLButtonEvent,
  ReactHTMLInputEvent,
} from "../../interfaces";
import AuthLayout from "../../layout/auth";
import NotAuthMiddleware from "../../middlewares/notauth";
import { LOGIN_VERIFY_PAGE } from "../../utils/constants";

const LoginPage: React.FC = () => {
  const {
    error: emailLoginError,
    handleLogin: handleEmailLogin,
    setEmail,
  } = useEmailLogin();

  const { isLoading, startLoading, stopLoading } = useLoading();

  const { handleLogin: handleWalletLogin } = useWalletLogin();

  const { toast } = useToast();

  let navigate = useNavigate();

  const loginWithEmail = useCallback(() => {
    startLoading();
    const _handleEmailLogin = async () => {
      const success = await handleEmailLogin();
      if (!success) {
        toast.fire({
          icon: "error",
          title: emailLoginError,
        });
        stopLoading();
        return;
      }
      navigate(LOGIN_VERIFY_PAGE);
    };
    _handleEmailLogin();
  }, [
    startLoading,
    stopLoading,
    handleEmailLogin,
    navigate,
    emailLoginError,
    toast,
  ]);

  return (
    <NotAuthMiddleware>
      <AuthLayout title="login page">
        <div className="flex flex-col gap-4 pt-12">
          <div className="flex flex-col space-y-1">
            <Label aria-label="Email Address">Email Address</Label>
            <Input
              onChange={(e: ReactHTMLInputEvent) => {
                const value = e.target.value;
                setEmail(value);
              }}
              autoFocus={true}
              type="text"
              id="email"
              placeholder="Email Address"
            />
          </div>

          <div className="text-center py-3">
            {isLoading ? (
              <Button aria-label="login">Loading....</Button>
            ) : (
              <Button
                aria-label="login"
                onClick={async (e: ReactHTMLButtonEvent) => {
                  e.preventDefault();
                  loginWithEmail();
                }}
              >
                Login
              </Button>
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
            <GradientButton
              aria-label="Sign in with your wallet"
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                handleWalletLogin();
              }}
            >
              Sign in with your wallet
            </GradientButton>
          </div>
        </div>
      </AuthLayout>
    </NotAuthMiddleware>
  );
};

export default LoginPage;
