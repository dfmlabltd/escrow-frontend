import { useCallback, useEffect, useState } from "react";
import { useSignMessage, useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";

import {
  ACCESS_TOKEN_ENDPOINT,
  LOGIN_WITH_WALLET_ENDPOINT,
  REDIRECT_TO_AFTER,
} from "../../utils/constants";
import { setAccessToken, setRefreshToken } from "../../utils/helpers";
import customAxios from "../../axios";
import useToast from "../toast";

const useWalletLogin = () => {
  const { address, isConnected } = useAccount();

  const [error, setError] = useState<string>("");

  const { openConnectModal } = useConnectModal();

  const [secretCache, setSecretCache] = useState<string>("");

  const { persistentToast, toast } = useToast();

  const { data, signMessage, isSuccess, isError } = useSignMessage({
    message: secretCache,
  });

  const [isSignatureReady, setSignatureReady] = useState<boolean>(false);

  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (isError) {
      toast.fire({
        icon: "error",
        title: "signing error occured",
      });
      return () => {
        toast.close();
      };
    }
  }, [isError]);

  useEffect(() => {
    if (isReady && isConnected) {
      handleSignHelper();
      setIsReady(() => false);
      persistentToast.fire({
        icon: "info",
        title: "check your wallet for signing request",
      });
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
    customAxios
      .post(LOGIN_WITH_WALLET_ENDPOINT, {
        address,
      })
      .then((response) => {
        const { secret } = response.data;
        setSecretCache(secret);
      })
      .catch(() => {
        toast.fire({
          icon: "error",
          title: "error occured, try again!",
        });
      });
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
        window.location.href =
          sessionStorage.getItem(REDIRECT_TO_AFTER) ?? "/dashboard";
      })
      .catch(() => {
        toast.fire({
          icon: "error",
          title: "invalid signature, try again!",
        });
      });
  }, [data, secretCache]);

  const handleLogin = useCallback(() => {
    console.log(isConnected);
    if (!isConnected) {
      openConnectModal?.();
    }
    setIsReady(true);
  }, [isConnected, openConnectModal]);

  return { address, error, handleLogin };
};

export default useWalletLogin;
