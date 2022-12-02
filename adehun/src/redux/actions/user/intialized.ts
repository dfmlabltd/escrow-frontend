import { IUser } from "../../../interfaces/user";
import { USER_INITIALIZED } from "./constants";
import IUserAction from "./interface";

const userInitialized = (payload: IUser): IUserAction => {
  return {
    type: USER_INITIALIZED,
    payload: payload,
  };
};

export default userInitialized;
