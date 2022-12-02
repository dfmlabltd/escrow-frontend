import { Dispatch, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import authAxios from "../../axios/auth";
import { IUser } from "../../interfaces/user";
import grammar from "../../lang/en.json";
import { userAction } from "../../redux/actions";
import IUserAction from "../../redux/actions/user/interface";
import { USER_EMAIL_VERIFICATION_ENDPOINT } from "../../utils/constants";
import useToast from "../toast";

const useVerifyEmail = () => {
  const [error, setError] = useState<string>("");

  const [code, setCode] = useState<string>("");

  const dispatch: Dispatch<IUserAction> = useDispatch();

  const { toast } = useToast();

  const verifyEmail = useCallback(async (): Promise<boolean> => {
    if (code.length < 20) {
      const INVALID_CODE_ERROR: string = grammar["INVALID_CODE_ERROR"];
      setError(INVALID_CODE_ERROR);
      return false;
    }

    try {
      const { data } = await authAxios.post(USER_EMAIL_VERIFICATION_ENDPOINT, {
        code: code,
      });
      const user: IUser = data;
      dispatch(userAction.userDataUpdated(user));
      return true;
    } catch (e: any) {
      const EMAIL_VERIFICATION_ERROR: string =
        grammar["EMAIL_VERIFICATION_ERROR"];
      toast.fire({
        icon: "error",
        title: EMAIL_VERIFICATION_ERROR,
      });
      setError(EMAIL_VERIFICATION_ERROR);
      return false;
    }
  }, [dispatch, code, toast]);

  return { code, setCode, error, verifyEmail };
};

export default useVerifyEmail;
