import {
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  getRefreshToken,
} from "../utils/helpers";

export interface IToken {
  getToken(): string | null;
}

export class Token implements IToken {
  constructor(token: string | null) {
    if (token && token.length > 0) {
      this.setToken(token);
    }
  }

  private setToken = (token: string): void => {
    setAccessToken(token);
  };

  getToken = (): string | null => {
    return getRefreshToken();
  };
}
