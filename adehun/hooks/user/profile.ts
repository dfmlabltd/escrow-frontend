import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import authAxios from "../../axios/auth";
import { IUser } from "../../interface/user";
import { userAction } from "../../redux/actions";
import IState from "../../redux/istore";
import { USER_PROFILE_ENDPOINT } from "../../utils/constants";

const useProfile = () => {
  const [error, setError] = useState<string>();

  const user = useSelector<IState>((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = useCallback(async () => {
    try {
      const { data } = await authAxios.get(USER_PROFILE_ENDPOINT);
      const user: IUser = data;
      dispatch(userAction.userInitialized(user));
    } catch (e: any) {
      setError(e.response.data.details);
    }
  }, [dispatch]);

  return { user, error, getProfile };
};

export default useProfile;
