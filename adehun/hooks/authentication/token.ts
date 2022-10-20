import { useRouter } from "next/router";
import { useEffect } from "react";
import { TOKEN_REFRESH_INTERVAL } from "../../utils/constants";
import { refreshAccessToken } from "../../utils/helpers";

const useToken = () => {
  const router = useRouter();

  useEffect(() => {
    try {
      const interval = setInterval(async () => {
        await refreshAccessToken();
      }, TOKEN_REFRESH_INTERVAL);

      return () => {
        clearInterval(interval);
      };
    } catch (error) {
      router.push("/login");
    }
  });
};

export default useToken;
