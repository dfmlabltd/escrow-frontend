import { IUser } from "../../../interfaces/user";
import { USER_EMAIL_VERIFIED } from "./constants";
import IUserAction from "./interface";

const userEmailVerified = (payload: IUser): IUserAction => {
  return {
    type: USER_EMAIL_VERIFIED,
    payload: payload,
  };
};

export default userEmailVerified;
