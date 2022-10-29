import { useRouter } from "next/router";
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

  const router = useRouter();

  const dispatch = useDispatch();

  const handleEmail = useCallback(
    (email: string): void => {
      try {
        setEmail(new Email(email));
        setError("");
      } catch (error) {
        setError("invalid email address");
      }
    },
    [email]
  );

  const changeEmail = useCallback(async () => {
    try {
      const { data } = await authAxios.patch(USER_EMAIL_VERIFICATION_ENDPOINT, {
        email: email.toString(),
      });
      const user: IUser = data;
      dispatch(userAction.userDataUpdated(user));
      router.push("/email/verify");
    } catch (e: any) {
      setError(e.message);
    }
  }, [dispatch, email]);

  return { email, handleEmail, error, changeEmail };
};

export default useChangeEmail;
