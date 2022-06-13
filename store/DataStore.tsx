import { observable } from "mobx";
import { useStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

type ContractStore = {
	depositors: [
		{
			user: string;
			amount: number;
			wallet_address: string;
		}
	];
	trustees: [
		{
			user: string;
			amount: number;
			wallet_address: string;
		}
	];

	amount: number | undefined;
	token_address: string;
	blockchain_network: string;
	title: string;
};

export class ContractsStore {
	@observable contractInfo: any;
	@observable amount: any;

	hydrate(contractStore: ContractStore) {
		this.contractInfo = contractStore != null ? contractStore : "";
		this.amount = contractStore.amount != null ? contractStore.amount : "";
	}

	handleAmount(e: string) {
		this.amount = e;
	}
	handleContractInfo(data: object) {
		this.contractInfo = data;
	}
}

export async function fetchInitialStoreState() {
	// You can do anything to fetch initial store state
	return {};
}
