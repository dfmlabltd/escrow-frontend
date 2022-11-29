import { AnyAction } from "@reduxjs/toolkit";
import { IContract } from "../../../interface/contract";

export interface IContractWidget {
  readonly isContractWidgetTogged: boolean;
}

export interface IContractWidgetAction extends AnyAction {
  type: string;
}

export interface IContractAction extends AnyAction {
  type: string;
  payload: IContract[];
}
