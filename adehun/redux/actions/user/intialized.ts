import { IUser } from "../../../interface/user";
import { USER_INITIALIZED } from "./constants";
import IUserAction from "./interface";

const userInitialized = (payload: IUser): IUserAction => {
  return {
    action: USER_INITIALIZED,
    payload: payload,
  };
};

export default userInitialized;
