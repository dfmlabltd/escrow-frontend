import { Dispatch, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import authAxios from "../../axios/auth";
import { IUser } from "../../interfaces/user";
import grammar from "../../lang/en.json";
import { userAction } from "../../redux/actions";
import IUserAction from "../../redux/actions/user/interface";
import { USER_PROFILE_ENDPOINT } from "../../utils/constants";

const useProfile = () => {
  const [error, setError] = useState<string>("");

  const dispatch: Dispatch<IUserAction> = useDispatch();

  const getProfile = useCallback(async (): Promise<IUser | boolean> => {
    try {
      setError("");
      const { data } = await authAxios.get(USER_PROFILE_ENDPOINT);
      const user: IUser = data;
      dispatch(userAction.userInitialized(user));
      return user;
    } catch {
      setError(grammar["GET_USER_PROFILE_ERROR"]);
      return false;
    }
  }, [dispatch]);

  return { error, getProfile };
};

export default useProfile;
