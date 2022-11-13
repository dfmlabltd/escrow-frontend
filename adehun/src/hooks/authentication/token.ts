import { useEffect } from "react";
import { TOKEN_REFRESH_INTERVAL } from "../../utils/constants";
import { refreshAccessToken } from "../../utils/token";

const useToken = () => {
  useEffect(() => {
    try {
      const interval = setInterval(async () => {
        await refreshAccessToken();
      }, TOKEN_REFRESH_INTERVAL);

      return () => {
        clearInterval(interval);
      };
    } catch (error) {}
  });
};

export default useToken;
