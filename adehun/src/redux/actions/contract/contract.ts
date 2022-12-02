import { IContract } from "../../../interfaces/contract";
import { CONTRACTS_INITIALIZED } from "./constants";
import { IContractAction } from "./interface";

const contractsInitialized = (payload: IContract[]): IContractAction => {
  return {
    type: CONTRACTS_INITIALIZED,
    payload: payload,
  };
};

export { contractsInitialized };
