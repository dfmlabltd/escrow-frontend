import { useRouter } from "next/router";
import { useEffect, PropsWithChildren } from "react";
import useToken from "../hooks/authentication/token";
import useLoading from "../hooks/loading";
import useProfile from "../hooks/user/profile";
import { REDIRECT_TO_AFTER } from "../utils/constants";

const EmailVerifiedMiddleware: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const { startLoading, stopLoading, isLoading } = useLoading();

  const { getProfile, error } = useProfile();

  const router = useRouter();

  useToken();

  useEffect(() => {
    startLoading();
    async function _getProfile(): Promise<void> {
      try {
        const user = await getProfile();
        const current_path = window.location.pathname;
        console.log(current_path);
        if (!(current_path == "/email" || current_path == "/email/verify")) {
          sessionStorage.setItem(REDIRECT_TO_AFTER, current_path);
        }

        if (
          current_path !== "/email" &&
          !user.is_email_verified &&
          user.email?.toString()
        ) {
          window.location.href = "/email/verify";
          return;
        }

        if (!(user.is_email_verified && user.email?.toString())) {
          window.location.href = "/email";
          return;
        }

        if (
          current_path === "/email/verify" &&
          user.is_email_verified &&
          user.email
        ) {
          window.location.href = "/dashboard";
          return;
        }
      } catch (error) {
        window.location.href = "/login";
      }
    }
    _getProfile();
    stopLoading();
  }, [error]);

  return isLoading ? <></> : <>{children}</>;
};

export default EmailVerifiedMiddleware;
