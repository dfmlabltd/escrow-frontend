import { AnyAction } from "@reduxjs/toolkit";
import { IContractWidget } from "../actions/contract/interface";
import * as actions from "../actions/contract/constants";

export default function contractWidgetReducer(
  state: IContractWidget,
  { type }: AnyAction
): IContractWidget {
  switch (type) {
    case actions.CONTRACT_WIDGET_OPENED:
      return {
        isContractWidgetTogged: true,
      };
    case actions.CONTRACT_WIDGET_CLOSED:
      return {
        isContractWidgetTogged: false,
      };
    default:
      return {
        isContractWidgetTogged: false,
      };
  }
}
