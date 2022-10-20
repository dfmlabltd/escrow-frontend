import { IToken } from "../../../interface/token";
import { TOKEN_INITIALIZED } from "./constants";
import ITokenAction from "./interace";

const tokenInitialized = (payload: IToken): ITokenAction => {
  return {
    action: TOKEN_INITIALIZED,
    payload: payload,
  };
};

export default tokenInitialized;
