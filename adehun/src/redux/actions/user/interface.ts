import { AnyAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interfaces/user";

export default interface IUserAction extends AnyAction {
  payload: IUser;
  type: string;
}
