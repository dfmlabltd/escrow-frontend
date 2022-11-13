import { Dispatch, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import authAxios from "../../axios/auth";
import { IUser } from "../../interface/user";
import grammar from "../../lang/en.json";
import { userAction } from "../../redux/actions";
import IUserAction from "../../redux/actions/user/interface";
import { assertValidEmail } from "../../utils/assert";
import { USER_EMAIL_VERIFICATION_ENDPOINT } from "../../utils/constants";

const useChangeEmail = () => {
  const [error, setError] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  const dispatch: Dispatch<IUserAction> = useDispatch();

  const changeEmail = useCallback(async (): Promise<boolean> => {
    try {
      assertValidEmail(email);
    } catch (e) {
      setError(grammar["INVALID_EMAIL_ERROR"]);
      return false;
    }

    try {
      const { data } = await authAxios.patch(USER_EMAIL_VERIFICATION_ENDPOINT, {
        email,
      });
      const user: IUser = data;
      dispatch(userAction.userInitialized(user));
      return true;
    } catch (e: any) {
      setError(e.message);
      return false;
    }
  }, [email, setError, dispatch]);

  return { email, error, changeEmail, setEmail };
};

export default useChangeEmail;
