import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import authAxios from "../../axios/auth";
import { IUser } from "../../interface/user";
import { userAction } from "../../redux/actions";
import { USER_EMAIL_VERIFICATION_ENDPOINT } from "../../utils/constants";

const useVerifyEmail = () => {
  const [error, setError] = useState<string>();

  const [code, setCode] = useState("");

  const dispatch = useDispatch();

  const verifyEmail = useCallback(async () => {
    try {
      const { data } = await authAxios.post(USER_EMAIL_VERIFICATION_ENDPOINT, {
        code,
      });
      const user: IUser = data;
      dispatch(userAction.userDataUpdated(user));
    } catch (e: any) {
      setError(e.response.data.details);
    }
  }, [dispatch]);

  return { code, setCode, error, verifyEmail };
};

export default useVerifyEmail;
