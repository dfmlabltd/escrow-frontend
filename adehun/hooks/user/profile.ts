import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authAxios from "../../axios/auth";
import { IUser } from "../../interface/user";
import { userAction } from "../../redux/actions";
import { USER_PROFILE_ENDPOINT } from "../../utils/constants";

const useProfile = () => {
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  const getProfile = useCallback(async () => {
    const { data } = await authAxios.get(USER_PROFILE_ENDPOINT);
    const user: IUser = data;
    dispatch(userAction.userInitialized(user));

    return user;
  }, [dispatch]);

  return { error, getProfile };
};

export default useProfile;
