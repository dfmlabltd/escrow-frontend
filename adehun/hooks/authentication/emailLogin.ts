import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { IEmail, Email } from "../../interface/email";
import customAxios from "../../axios";
import {
  ACCESS_TOKEN_ENDPOINT,
  CURRENT_USER_EMAIL,
  LOGIN_WITH_EMAIL_ENDPOINT,
} from "../../utils/constants";
import { setAccessToken, setRefreshToken } from "../../utils/helpers";

export const useEmailLogin = () => {
  const [email, setEmail] = useState<IEmail>(new Email("", true));

  const [error, setError] = useState<string>("");

  const [loginError, setLoginError] = useState<string>("");

  const router = useRouter();

  const handleLogin = useCallback(async () => {
    try {
      await customAxios.post(LOGIN_WITH_EMAIL_ENDPOINT, {
        email: email.toString(),
      });
      sessionStorage.setItem(CURRENT_USER_EMAIL, email.toString());
      setLoginError("");
      router.push("/email/verify/");
    } catch (e: any) {
      console.log(e);
      setLoginError(e);
    }
  }, [email]);

  const handleEmail = useCallback(
    (email: string): void => {
      try {
        setEmail(new Email(email));
        setError("");
      } catch (error) {
        setError("invalid email address");
      }
    },
    [email]
  );

  return {
    email: email.toString(),
    error,
    handleEmail,
    handleLogin,
    loginError,
    setLoginError,
  };
};

export const useEmailLoginVerify = () => {
  const [code, setCode] = useState<string>("");

  const [error, setError] = useState<string>("");

  const [verificationError, setVerificationError] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    if (code.length > 10) {
      setError("");
      return;
    }
    setError("invalid code");
  }, [code]);

  const handleVerify = useCallback(async () => {
    try {
      const getToken = await customAxios.post(ACCESS_TOKEN_ENDPOINT, {
        password: code,
        email: sessionStorage.getItem(CURRENT_USER_EMAIL),
      });

      const { refresh, access } = getToken.data;
      setAccessToken(access);
      setRefreshToken(refresh);
      setVerificationError("");

      router.push("/dashboard/");
    } catch (e: any) {
      setVerificationError(e);
    }
  }, [code]);

  return {
    code,
    setCode,
    error,
    handleVerify,
    verificationError,
    setVerificationError,
  };
};
