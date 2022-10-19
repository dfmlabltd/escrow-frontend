import axios from "axios";
import exp from "constants";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { IToken, Token } from "../../interface/token";
import {
  API_ENDPOINT,
  REFRESH_TOKEN_ENDPOINT,
  TOKEN_REFRESH_INTERVAL,
} from "../../utils/constants";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
} from "../../utils/helpers";

const useToken = () => {
  const [accessToken] = useState<IToken>(new Token(getAccessToken()));
  const [refreshToken] = useState<IToken>(new Token(getRefreshToken()));

  const router = useRouter();

  const refreshAccessToken = useCallback(async () => {
    try {
      const { data } = await axios.post(API_ENDPOINT + REFRESH_TOKEN_ENDPOINT, {
        refresh: refreshToken,
      });
      setAccessToken(data.access_token);
    } catch (e) {
      router.push("/login");
    }
  }, [refreshToken]);

  useEffect(() => {
    const interval = setInterval(() => {
      refreshAccessToken();
    }, TOKEN_REFRESH_INTERVAL);
    return () => {
      clearInterval(interval);
    };
  }, [refreshAccessToken]);

  return {
    access: accessToken.getToken,
    refresh: refreshToken.getToken,
    refresh_acess: refreshAccessToken,
  };
};


export default useToken