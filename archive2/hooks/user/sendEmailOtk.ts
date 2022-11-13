import { useCallback, useState } from "react";
import authAxios from "../../axios/auth";
import { USER_EMAIL_RESEND_OTK_ENDPOINT } from "../../utils/constants";
import useToast from "../toast";

const useSendOTK = () => {
  const [error, setError] = useState<string>();

  const { toast } = useToast();

  const sendOTK = useCallback(async () => {
    try {
      setError("");
      await authAxios.post(USER_EMAIL_RESEND_OTK_ENDPOINT);
      toast.fire({
        icon: "success",
        title: "verification code sent successfully",
      });
    } catch (e: any) {
      toast.fire({
        icon: "error",
        title: "can not send verification code",
      });
      setError(e.message);
    }
  }, []);

  return { sendOTK, error };
};

export default useSendOTK;
