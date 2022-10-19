import { IToken } from "../interface/token";
import { IUser } from "../interface/user";

export default interface IState {
  readonly user: IUser;
  readonly token: IToken;
}
