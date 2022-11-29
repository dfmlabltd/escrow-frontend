import { AnyAction } from "@reduxjs/toolkit";

export interface IContractWidget {
  readonly isContractWidgetTogged: boolean;
}

export interface IContractWidgetAction extends AnyAction {
  type: string;
}
