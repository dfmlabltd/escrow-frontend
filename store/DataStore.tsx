import { observable, action, makeAutoObservable } from "mobx";
import { useStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

interface ContractStore {
	depositors: [
		{
			email: string;
			amount: any;
			wallet_address?: any;
		}
	];
	trustees: [
		{
			email: string;
			amount: any;
			wallet_address?: any;
		}
	];

	amount: string;
	token_address: string;
	token: object;
	coin: object;
	blockchain_network: string;
	title: string;
}

export class ContractsStore {
	@observable contractInfo: any = {
		depositors: [
			{
				email: "",
				amount: "",
				wallet_address: "",
			},
		],
		trustees: [
			{
				email: "",
				amount: "",
				wallet_address: "",
			},
		],
		amount: "",
		token_address: "",
		token: {},
		coin: {},
		blockchain_network: "",
		title: "",
	};
	constructor() {
		makeAutoObservable(this);
	}
	@observable amount: any;

	hydrate(contractStore: ContractStore) {
		if (!contractStore) return;
		this.contractInfo(contractStore);
	}

	@action handleChange = (field: string, data: any) => {
		this.contractInfo[field] = data;
	};
	@action handleTrusteesChange = (
		field: string,
		index: number,
		data: any,
		sub: string
	) => {
		this.contractInfo[field][index][sub] = data;
	};
	@action handleContractInfo(data: object) {
		this.contractInfo = data;
	}
}
export const storeContract = new ContractsStore();
