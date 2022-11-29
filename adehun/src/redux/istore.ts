import { IContract } from "../interface/contract";
import { IUser } from "../interface/user";
import { IContractWidget } from "./actions/contract/interface";

export default interface IState {
  readonly user?: IUser;
  readonly contractWidget?: IContractWidget;
  readonly contracts?: IContract;
}
