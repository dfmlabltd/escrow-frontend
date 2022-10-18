import { IUser } from "../../../interface/user";
import { USER_LOGGED_OUT } from "./constants";
import IUserAction from "./interface";

const userLoggedOut = (payload: IUser): IUserAction => {
  return {
    action: USER_LOGGED_OUT,
    payload: payload,
  };
};

export default userLoggedOut;
