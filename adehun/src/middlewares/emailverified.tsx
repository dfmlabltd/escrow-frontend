import { useEffect, PropsWithChildren } from "react";
import useToken from "../hooks/authentication/token";
import useLoading from "../hooks/loading";
import useProfile from "../hooks/user/profile";
import {
  DASHBOARD_PAGE,
  EMAIL_CHANGE_PAGE,
  LOGIN_PAGE,
  REDIRECT_TO_AFTER,
  USER_EMAIL_VERIFICATION_PAGE,
} from "../utils/constants";
import { useNavigate } from "react-router-dom";

const EmailVerifiedMiddleware: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const { startLoading, stopLoading, isLoading } = useLoading(true);

  const { getProfile } = useProfile();

  let navigate = useNavigate();

  useToken();

  useEffect(() => {
    startLoading();
    async function _getProfile(): Promise<void> {
      try {
        const user = await getProfile();
        // if user is not logged in redirect to login page
        if (typeof user === "boolean") {
          navigate(LOGIN_PAGE);
          return;
        }

        let current_path = window.location.pathname;

        if (current_path.slice(-1) == "/") {
          current_path = current_path.substring(1);
          return;
        }

        if (current_path == "/email/success") {
          return;
        }
        const WHITELIST_PATHS = [
          EMAIL_CHANGE_PAGE,
          USER_EMAIL_VERIFICATION_PAGE,
        ];
        const IS_WHITELISTED_PATH = WHITELIST_PATHS.includes(current_path);
        // trying to access email verification or set email page
        // remember the path on redirect_to_after
        if (IS_WHITELISTED_PATH) {
          sessionStorage.setItem(REDIRECT_TO_AFTER, current_path);
        }
        // trying to access email verification or set email page
        // redirect back to the dashboard if email has been verified
        if (IS_WHITELISTED_PATH && user.is_email_verified) {
          navigate(DASHBOARD_PAGE);
          return;
        }
        // redirect to email change page if email has not been set
        if (current_path === WHITELIST_PATHS[1] && !user.email) {
          navigate(EMAIL_CHANGE_PAGE);
          return;
        }
        stopLoading();
      } catch (e) {
        navigate(LOGIN_PAGE);
      }
    }
    _getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? <>loading</> : <>{children}</>;
};

export default EmailVerifiedMiddleware;
