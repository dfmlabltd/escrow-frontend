import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { IEmail, Email } from "../../interface/email";
import {
  CURRENT_USER_EMAIL,
  LOGIN_WITH_EMAIL_ENDPOINT,
  USER_EMAIL_VERIFICATION_ENDPOINT,
} from "../../utils/constants";
import { setAccessToken, setRefreshToken } from "../../utils/helpers";

export const useEmailLogin = () => {
  const [email, setEmail] = useState<IEmail>(new Email("", true));

  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleLogin = useCallback(async () => {
    try {
      await axios.post(LOGIN_WITH_EMAIL_ENDPOINT, {
        email: email.toString(),
      });
      sessionStorage.setItem(CURRENT_USER_EMAIL, email.toString());
      router.push("/email/verify/");
    } catch (e: any) {
      setError(e.response.data.details);
    }
  }, [email]);

  const handleEmail = (email: string): void => {
    try {
      setEmail(new Email(email));
    } catch (error) {
      setError("invalid email address");
    }
  };

  return [email.toString, error, handleEmail, handleLogin];
};

export const useEmailLoginVerify = () => {
  const [code, setCode] = useState<string>("");

  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleVerify = useCallback(async () => {
    try {
      const getToken = await axios.post(USER_EMAIL_VERIFICATION_ENDPOINT, {
        code,
        email: sessionStorage.getItem(CURRENT_USER_EMAIL),
      });

      const { access_token, refresh_token } = getToken.data;
      setAccessToken(access_token);
      setRefreshToken(refresh_token);

      router.push("/dashboard/");
    } catch (e: any) {
      setError(e.response.data.details);
    }
  }, [code]);

  return { code, setCode, error, handleVerify };
};
