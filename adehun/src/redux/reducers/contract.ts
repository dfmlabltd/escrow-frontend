import { AnyAction } from "@reduxjs/toolkit";
import { IContract } from "../../interfaces/contract";
import * as actions from "../actions/contract/constants";

export default function contractsReducer(
  state: IContract[],
  { type, payload }: AnyAction
): IContract[] {
  switch (type) {
    case actions.CONTRACTS_INITIALIZED:
      return payload;
    default:
      return [];
  }
}
