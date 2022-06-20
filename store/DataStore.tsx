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
	token: object;
	coin: object;
	wait_day: number;
	auto_withdrawal: boolean;
	title: string;
}
const iSSERVER = typeof window === "undefined";

export class ContractsStore {
	@action
	fetchAuthFromLocalStorage = () => {
		const localStorageAuth = !iSSERVER && localStorage.getItem("user");
		return localStorageAuth ? JSON.parse(localStorageAuth) : null;
	};
	@action
	fetchTokenFromLocalStorage = () => {
		const localStorageAuth = !iSSERVER && localStorage.getItem("access_token");
		return localStorageAuth ? JSON.parse(localStorageAuth) : null;
	};
	@observable token: null | any = this.fetchTokenFromLocalStorage();
	@observable
	user: null | any | undefined = this.fetchAuthFromLocalStorage();
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
		agreement_contract: "",
		auto_withdrawal: false,
		wait_day: 2,
		coin: {},
		blockchain_network: "",
		title: "",
	};

	@observable DepositorCheck: any = "";
	constructor() {
		makeAutoObservable(this);
	}
	@observable amount: any;
	hydrate(contractStore: ContractStore) {
		if (!contractStore) return;
		this.contractInfo(contractStore);
		if (!this.user) return;
		this.user({ email: "" });
	}

	@action handleChange = (field: string, data: any) => {
		this.contractInfo[field] = data;
	};
	@action handleDepositorCheck = (data: any) => {
		this.DepositorCheck = data;
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
