import { AnyAction } from "@reduxjs/toolkit";
import { IContract } from "../../../interfaces/contract";

export interface IContractAction extends AnyAction {
  type: string;
  payload: IContract[] | IContract;
}
