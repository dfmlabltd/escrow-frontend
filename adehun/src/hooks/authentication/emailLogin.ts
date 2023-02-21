import { useCallback, useState } from "react";
import customAxios from "../../axios";
import grammar from "../../lang/en.json";
import { assertValidEmail } from "../../utils/assert";
import {
  ACCESS_TOKEN_ENDPOINT,
  CURRENT_USER_EMAIL,
  LOGIN_WITH_EMAIL_ENDPOINT,
} from "../../utils/constants";
import { setAccessToken, setRefreshToken } from "../../utils/token";

export const useEmailLogin = () => {
  const [email, setEmail] = useState<string>("");

  const [error, setError] = useState<string>("");

  const handleLogin = useCallback(async (): Promise<boolean> => {
    try {
      assertValidEmail(email);
      setError("");
    } catch (e: any) {
      const INVALID_EMAIL_ERROR: string = grammar["INVALID_EMAIL_ERROR"];
      setError(INVALID_EMAIL_ERROR);
      return false;
    }

    localStorage.clear()

    try {
      await customAxios.post(LOGIN_WITH_EMAIL_ENDPOINT, {
        email,
      });
      sessionStorage.setItem(CURRENT_USER_EMAIL, email);
      return true;
    } catch (e: any) {
      const LOGIN_ERROR: string = grammar["LOGIN_ERROR"];
      setError(LOGIN_ERROR);
      return false;
    }
  }, [email, setError]);

  return {
    email,
    error,
    setEmail,
    handleLogin,
  };
};

export const useEmailLoginVerify = () => {
  const [code, setCode] = useState<string>("");

  const [error, setError] = useState<string>("");

  const handleVerify = useCallback(async (): Promise<boolean> => {
    if (code.length < 20) {
      const INVALID_CODE_ERROR: string = grammar["INVALID_CODE_ERROR"];
      setError(INVALID_CODE_ERROR);
      return false;
    }

    const current_user_email: string =
      sessionStorage.getItem(CURRENT_USER_EMAIL) ?? "";

    try {
      assertValidEmail(current_user_email);
    } catch {
      return false;
    }

    setError("");

    try {
      const getToken = await customAxios.post(ACCESS_TOKEN_ENDPOINT, {
        password: code,
        email: current_user_email,
      });

      const { refresh, access } = getToken.data;

      setAccessToken(access);
      setRefreshToken(refresh);

      return true;
    } catch (e: any) {
      setError(e);
      return false;
    }
  }, [code]);

  return {
    code,
    setCode,
    error,
    handleVerify,
  };
};
