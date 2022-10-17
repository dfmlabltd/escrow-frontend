import { storeContract } from "./DataStore";
import { IStore } from "./store-interface";

export const ContractsArchive: IStore = {
	ContractsStore: storeContract,
};
