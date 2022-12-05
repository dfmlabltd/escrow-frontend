import { AnyAction } from "@reduxjs/toolkit";
import produce from "immer";
import { IUser } from "../../interfaces/user";
import * as actions from "../actions/user/constants";

export default function userReducer(
  state: IUser,
  { type, payload }: AnyAction
): IUser {
  switch (type) {
    case actions.USER_INITIALIZED:
      return payload;
    case actions.USER_DATA_UPDATED:
      return payload;
    case actions.USER_EMAIL_VERIFIED:
      return produce(state, (_user) => {
        _user.email = payload.email;
      });
    case actions.USER_USERNAME_UPDATED:
      return produce(state, (_user) => {
        _user.username = payload.username;
      });
    default:
      return {
        id: 0,
        is_active: false,
        is_email_verified: false,
      };
  }
}
