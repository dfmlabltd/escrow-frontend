import { IToken, Token } from "../../interface/token";
import * as actions from "../actions/token/constants";
import ITokenAction from "../actions/token/interace";

export default function tokenReducer(
  state: IToken,
  { action, payload }: ITokenAction
): IToken {
  switch (action) {
    case actions.TOKEN_INITIALIZED:
      return payload;
    case actions.TOKEN_UPDATED:
      return payload;
    default:
      return new Token("");
  }
}
