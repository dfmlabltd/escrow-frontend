import { IContract } from "../interfaces/contract";
import { IUser } from "../interfaces/user";

export default interface IState {
  readonly user?: IUser;
  readonly contracts?: IContract;
}
