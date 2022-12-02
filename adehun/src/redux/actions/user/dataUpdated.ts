import { IUser } from "../../../interfaces/user";
import { USER_DATA_UPDATED } from "./constants";
import IUserAction from "./interface";

const userDataUpdated = (payload: IUser): IUserAction => {
  return {
    type: USER_DATA_UPDATED,
    payload: payload,
  };
};

export default userDataUpdated;
