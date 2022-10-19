import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { IEmail, Email } from "../../interface/email";
import {
  API_ENDPOINT,
  CURRENT_USER_EMAIL,
  LOGIN_WITH_EMAIL_ENDPOINT,
} from "../../utils/constants";

export const useEmailLogin = () => {
  const [email, setEmail] = useState<IEmail>(new Email("", true));

  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleLogin = useCallback(async () => {
    try {
      await axios.post(API_ENDPOINT + LOGIN_WITH_EMAIL_ENDPOINT, {
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
