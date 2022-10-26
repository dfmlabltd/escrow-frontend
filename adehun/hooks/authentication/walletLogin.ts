import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useSignMessage, useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";

import {
  ACCESS_TOKEN_ENDPOINT,
  API_ENDPOINT,
  LOGIN_WITH_WALLET_ENDPOINT,
} from "../../utils/constants";
import { setAccessToken, setRefreshToken } from "../../utils/helpers";
import customAxios from "../../axios";

const useWalletLogin = () => {
  const { address, isConnected } = useAccount();

  const [error, setError] = useState<string>("");

  const { openConnectModal } = useConnectModal();

  const [secretCache, setSecretCache] = useState<string>("");

  const router = useRouter();

  const { data, signMessage, isSuccess } = useSignMessage({
    message: secretCache,
  });

  const [isSignatureReady, setSignatureReady] = useState<boolean>(false);

  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (isReady && isConnected) {
      handleSignHelper();
      setIsReady(() => false);
    }
  }, [isReady, isConnected]);

  useEffect(() => {
    if (isSignatureReady && isSuccess) {
      handleLoginHelper();
      setSignatureReady(() => false);
    }
  }, [isSignatureReady, isSuccess]);

  useEffect(() => {
    if (secretCache != "") {
      signMessage();
      setSignatureReady(true);
    }
  }, [secretCache]);

  const handleSignHelper = useCallback(async () => {
    try {
      customAxios
        .post(LOGIN_WITH_WALLET_ENDPOINT, {
          address,
        })
        .then((response) => {
          const { secret } = response.data;
          setSecretCache(secret);
        });
    } catch (e: any) {
      setError(e.message);
      return;
    }
  }, [address, signMessage]);

  const handleLoginHelper = useCallback(() => {
    customAxios
      .post(ACCESS_TOKEN_ENDPOINT, {
        email: data,
        password: secretCache,
      })
      .then((response) => {
        const { access, refresh } = response.data;
        setAccessToken(access);
        setRefreshToken(refresh);
        router.push("/dashboard/");
      });
  }, [data, secretCache]);

  const handleLogin = useCallback(() => {
    console.log("attempting to login");
    if (!isConnected) {
      openConnectModal?.();
    }
    setIsReady(true);
  }, [isConnected, openConnectModal]);

  return { address, error, handleLogin };
};

export default useWalletLogin;
