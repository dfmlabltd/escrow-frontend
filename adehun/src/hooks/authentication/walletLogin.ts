import { useCallback, useEffect, useState } from "react";
import { useSignMessage, useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";

import {
  ACCESS_TOKEN_ENDPOINT,
  DASHBOARD_PAGE,
  LOGIN_WITH_WALLET_ENDPOINT,
  REDIRECT_TO_AFTER,
} from "../../utils/constants";
import { setAccessToken, setRefreshToken } from "../../utils/token";
import customAxios from "../../axios";
import useToast from "../toast";
import grammar from "../../lang/en.json";
import { useNavigate } from "react-router-dom";

const useWalletLogin = () => {
  const { address, isConnected } = useAccount();

  const { openConnectModal } = useConnectModal();

  const [secretCache, setSecretCache] = useState<string>("");

  const { persistentToast, toast } = useToast();

  const { data, signMessage, isSuccess, isError } = useSignMessage({
    message: secretCache,
  });

  const [isSignatureReady, setSignatureReady] = useState<boolean>(false);

  const [isReady, setIsReady] = useState<boolean>(false);

  const navigate = useNavigate();

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
          title: grammar["SIGNING_ERROR"],
        });
      });
  }, [address, toast]);

  const handleLoginHelper = useCallback(() => {
    localStorage.clear();

    customAxios
      .post(ACCESS_TOKEN_ENDPOINT, {
        email: data,
        password: secretCache,
      })
      .then((response) => {
        const { access, refresh } = response.data;
        setAccessToken(access);
        setRefreshToken(refresh);
        navigate(sessionStorage.getItem(REDIRECT_TO_AFTER) ?? DASHBOARD_PAGE);
      })
      .catch(() => {
        toast.fire({
          icon: "error",
          title: grammar["SIGNING_ERROR"],
        });
      });
  }, [data, secretCache, toast, navigate]);

  const handleLogin = useCallback(() => {
    if (!isConnected) {
      openConnectModal?.();
    }
    setIsReady(true);
  }, [isConnected, openConnectModal]);

  useEffect(() => {
    if (isError) {
      toast.fire({
        icon: "error",

        title: grammar["SIGNING_ERROR"],
      });
      return () => {
        toast.close();
      };
    }
  }, [isError, toast]);

  useEffect(() => {
    if (isReady && isConnected) {
      handleSignHelper();
      setIsReady(() => false);
      persistentToast.fire({
        icon: "info",
        title: "requesting to be signed",
      });
    }
  }, [isReady, isConnected, setIsReady, persistentToast, handleSignHelper]);

  useEffect(() => {
    if (isSignatureReady && isSuccess) {
      handleLoginHelper();
      setSignatureReady(() => false);
    }
  }, [isSignatureReady, isSuccess, handleLoginHelper]);

  useEffect(() => {
    if (secretCache !== "") {
      persistentToast.fire({
        icon: "info",
        title: "check your wallet for a prompt",
      });
      signMessage();
      setSignatureReady(true);
    }
  }, [secretCache, signMessage, setSignatureReady]);

  return { address, handleLogin };
};

export default useWalletLogin;
