import { AnyAction } from "@reduxjs/toolkit";
import { IContract } from "../../interfaces/contract";
import * as actions from "../actions/contract/constants";

export default function contractsReducer(
  state: IContract[] = [],
  { type, payload }: AnyAction
): IContract[] {
  console.log(type);

  switch (type) {
    case actions.CONTRACTS_INITIALIZED:
      return payload;
    case actions.CONTRACT_ADDED:
      return [payload, ...state];
    default:
      return state;
  }
}
