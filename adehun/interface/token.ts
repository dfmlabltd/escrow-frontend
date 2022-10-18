import {
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  getRefreshToken,
} from "../utils/helpers";

export interface IToken {
  getRefreshToken(): string | null;
  getAccessToken(): string | null;
}

export class Token implements IToken {
  constructor(access: string, refresh?: string) {
    if (refresh != undefined && refresh) {
      this.setRefreshToken(refresh);
    }
    this.setAccessToken(access);
  }

  private setAccessToken = (token: string): void => {
    setAccessToken(token);
  };

  private setRefreshToken = (token: string): void => {
    setRefreshToken(token);
  };

  getAccessToken = (): string | null => {
    return getAccessToken();
  };

  getRefreshToken = (): string | null => {
    return getRefreshToken();
  };
}
