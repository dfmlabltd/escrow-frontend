import { useCallback, useState } from "react";
import authAxios from "../../axios/auth";
import grammar from "../../lang/en.json";
import { USER_EMAIL_RESEND_OTK_ENDPOINT } from "../../utils/constants";

const useSendOTK = () => {
  const [error, setError] = useState<string>("");

  const sendOTK = useCallback(async (): Promise<boolean> => {
    try {
      setError("");
      await authAxios.post(USER_EMAIL_RESEND_OTK_ENDPOINT);
      return true;
    } catch (e: any) {
      setError(grammar["VERIFICATION_CODE_FAILED"]);
      return false;
    }
  }, [setError]);

  return { sendOTK, error };
};

export default useSendOTK;
