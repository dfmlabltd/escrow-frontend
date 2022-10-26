import { useRouter } from "next/router";
import { useEffect, PropsWithChildren } from "react";
import useToken from "../hooks/authentication/token";
import useLoading from "../hooks/loading";
import useProfile from "../hooks/user/profile";

const AuthMiddleware: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { startLoading, stopLoading } = useLoading();

  const { getProfile, error } = useProfile();

  const router = useRouter();

  useToken();

  useEffect(() => {
    startLoading();
    async function _getProfile(): Promise<void> {
      try {
        await getProfile();
      } catch (error) {
        await router.push("/login");
      }
    }
    _getProfile();
    stopLoading();
  }, [error]);

  return <>{children}</>;
};

export default AuthMiddleware;
