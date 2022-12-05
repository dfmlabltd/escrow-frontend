import { IUser } from "../../../interfaces/user";
import { USER_USERNAME_UPDATED } from "./constants";
import IUserAction from "./interface";

const userUsernameUpdated = (payload: IUser): IUserAction => {
  return {
    type: USER_USERNAME_UPDATED,
    payload: payload,
  };
};

export default userUsernameUpdated;
