import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import authAxios from "../../axios/auth";
import { Email, IEmail } from "../../interface/email";
import { IUser } from "../../interface/user";
import { userAction } from "../../redux/actions";
import { USER_EMAIL_VERIFICATION_ENDPOINT } from "../../utils/constants";

const useChangeEmail = () => {
  const [error, setError] = useState<string>();

  const [email, setEmail] = useState<IEmail>(new Email("", true));

  const dispatch = useDispatch();

  const changeEmail = useCallback(async () => {
    try {
      const { data } = await authAxios.post(USER_EMAIL_VERIFICATION_ENDPOINT, {
        email,
      });
      const user: IUser = data;
      dispatch(userAction.userDataUpdated(user));
    } catch (e: any) {
      setError(e.response.data.details);
    }
  }, [dispatch]);

  return { email, setEmail, error, changeEmail };
};

export default useChangeEmail;
