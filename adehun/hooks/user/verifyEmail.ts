import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import authAxios from "../../axios/auth";
import { IUser } from "../../interface/user";
import { userAction } from "../../redux/actions";
import {
  REDIRECT_TO_AFTER,
  USER_EMAIL_VERIFICATION_ENDPOINT,
} from "../../utils/constants";
import useToast from "../toast";

const useVerifyEmail = () => {
  const [error, setError] = useState<string>();

  const [code, setCode] = useState("");

  const dispatch = useDispatch();

  const { toast } = useToast();

  const router = useRouter();

  const verifyEmail = useCallback(async () => {
    try {
      const { data } = await authAxios.post(USER_EMAIL_VERIFICATION_ENDPOINT, {
        code: code,
      });
      const user: IUser = data;
      dispatch(userAction.userDataUpdated(user));
      await router.push(
        sessionStorage.getItem(REDIRECT_TO_AFTER) ?? "/dashboard"
      );
    } catch (e: any) {
      toast.fire({
        icon: "error",
        title: "couldn't verify email",
      });

      setError(e.message);
    }
  }, [dispatch, code]);

  return { code, setCode, error, verifyEmail };
};

export default useVerifyEmail;
