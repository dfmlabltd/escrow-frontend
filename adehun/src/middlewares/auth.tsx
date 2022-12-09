import { useEffect, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/authentication/token";
import useLoading from "../hooks/loading";
import useProfile from "../hooks/user/profile";
import { LOGIN_PAGE, REDIRECT_TO_AFTER } from "../utils/constants";
import Preloader from "../widgets/Preloader";

const AuthMiddleware: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { startLoading, stopLoading, isLoading } = useLoading(true);

  const { getProfile } = useProfile();

  let navigate = useNavigate();

  useToken();

  useEffect(() => {
    startLoading();
    async function _getProfile(): Promise<void> {
      try {
        await getProfile();
      } catch (e) {
        sessionStorage.setItem(REDIRECT_TO_AFTER, window.location.pathname);
        navigate(LOGIN_PAGE);
      }
    }
    _getProfile();
    stopLoading();
  }, []);

  return isLoading ? <Preloader /> : <>{children}</>;
};

export default AuthMiddleware;
