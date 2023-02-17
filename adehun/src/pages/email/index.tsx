import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";
import useLoading from "../../hooks/loading";
import useToast from "../../hooks/toast";
import useChangeEmail from "../../hooks/user/changeEmail";
import { ReactHTMLButtonEvent, ReactHTMLInputEvent } from "../../interfaces";
import AuthLayout from "../../layout/auth";
import EmailVerifiedMiddleware from "../../middlewares/emailverified";
import { DASHBOARD_PAGE, REDIRECT_TO_AFTER } from "../../utils/constants";

const LoginWithEmailPage: React.FC = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();

  const { error, changeEmail, setEmail } = useChangeEmail();

  const { toast } = useToast();

  const navigate = useNavigate();

  const handleChangeEmail = useCallback(() => {
    startLoading();
    const _changeEmail = async () => {
      const success = await changeEmail();
      if (!success) {
        toast.fire({
          icon: "error",
          title: error,
        });
        stopLoading();
        return;
      }
      navigate(sessionStorage.getItem(REDIRECT_TO_AFTER) ?? DASHBOARD_PAGE);
      stopLoading();
    };
    _changeEmail();
  }, [changeEmail, error, navigate, startLoading, stopLoading, toast]);

  return (
    <EmailVerifiedMiddleware>
      <AuthLayout title="set email page">
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
                aria-label="Set a new Email"
                onClick={async (e: ReactHTMLButtonEvent) => {
                  e.preventDefault();
                  handleChangeEmail();
                }}
              >
                Set a new Email
              </Button>
            )}
          </div>
        </div>
      </AuthLayout>
    </EmailVerifiedMiddleware>
  );
};

export default LoginWithEmailPage;
