import { IContract } from "../../../interfaces/contract";
import { CONTRACTS_INITIALIZED, CONTRACT_ADDED } from "./constants";
import { IContractAction } from "./interface";

const contractsInitialized = (payload: IContract[]): IContractAction => {
  return {
    type: CONTRACTS_INITIALIZED,
    payload: payload,
  };
};

const contractAdded = (payload: IContract): IContractAction => {
  return {
    type: CONTRACT_ADDED,
    payload: payload,
  };
};

export { contractsInitialized, contractAdded };
