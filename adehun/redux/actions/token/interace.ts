import { IToken } from "../../../interface/token";

export default interface ITokenAction {
  payload: IToken;
  action: string;
}
