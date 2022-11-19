import { AnyAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interface/user";

export default interface IUserAction extends AnyAction {
  payload: IUser;
  type: string;
}
