import { IToken } from "../../../interface/token";
import { TOKEN_UPDATED } from "./constants";
import ITokenAction from "./interace";

const tokenUpdated = (payload: IToken): ITokenAction => {
  return {
    action: TOKEN_UPDATED,
    payload: payload,
  };
};

export default tokenUpdated;
