import { AnyAction } from "@reduxjs/toolkit";
import produce from "immer";
import { Identifier } from "../../interface/id";
import { IUser } from "../../interface/user";
import * as actions from "../actions/user/constants";

export default function userReducer(
  state: IUser,
  { action, payload }: AnyAction
): IUser {
  switch (action) {
    case actions.USER_INITIALIZED:
      return payload;
    case actions.USER_DATA_UPDATED:
      return payload;
    case actions.USER_EMAIL_VERIFIED:
      return produce(state, (_user) => {
        _user.email = payload.email;
      });
    default:
      return {
        id: 0,
        is_active: false,
        is_email_verified: false,
      };
  }
}
