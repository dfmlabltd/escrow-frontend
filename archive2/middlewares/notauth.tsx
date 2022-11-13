import { useRouter } from "next/router";
import { useEffect, PropsWithChildren } from "react";
import useLoading from "../hooks/loading";
import useProfile from "../hooks/user/profile";

const NotAuthMiddleware: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { startLoading, stopLoading, isLoading } = useLoading();

  const { getProfile, error } = useProfile();

  const router = useRouter();

  useEffect(() => {
    startLoading();
    async function _getProfile(): Promise<void> {
      try {
        await getProfile();
      } catch (error) {
        stopLoading();
        return;
      }
      window.location.href = "/dashboard";
    }
    _getProfile();
  }, [error]);

  return isLoading ? <></> : <>{children}</>;
};

export default NotAuthMiddleware;
