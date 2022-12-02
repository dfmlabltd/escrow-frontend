import { IUser } from "../../../interfaces/user";
import { USER_LOGGED_OUT } from "./constants";
import IUserAction from "./interface";

const userLoggedOut = (payload: IUser): IUserAction => {
  return {
    type: USER_LOGGED_OUT,
    payload: payload,
  };
};

export default userLoggedOut;
