import { IUser } from "../../../interface/user";

export default interface IUserAction {
  payload: IUser;
  action: string;
}
