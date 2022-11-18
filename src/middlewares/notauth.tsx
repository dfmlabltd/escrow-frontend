import { useEffect, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import useLoading from "../hooks/loading";
import useProfile from "../hooks/user/profile";
import { DASHBOARD_PAGE } from "../utils/constants";

const NotAuthMiddleware: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { startLoading, stopLoading, isLoading } = useLoading(true);

  const { getProfile } = useProfile();

  let navigate = useNavigate();

  useEffect(() => {
    async function _getProfile(): Promise<void> {
      startLoading();
      const user = await getProfile();

      // if user is logged, redirect to dashboard
      if (typeof user !== "boolean") {
        navigate(DASHBOARD_PAGE);
        return;
      }

      stopLoading();
    }
    _getProfile();
  }, [startLoading, getProfile, stopLoading, navigate]);

  return isLoading ? <>loading</> : <>{children}</>;
};

export default NotAuthMiddleware;
