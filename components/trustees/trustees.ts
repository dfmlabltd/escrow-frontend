import { useReducer, useCallback, useState, ChangeEvent } from "react";
import nextId from "react-id-generator";

interface Trustee {
	email?: string;
	amount?: any;
	wallet_address?: any;
}

interface ReducerState {
	trustees: Map<string, Trustee>;
}

export enum ActionType {
	ADD_FIELD,
	UPDATE_TRUSTEES,
	UPDATE_AMOUNT,
	UPDATE_WALLET,
}
function defaultTrustees(trustees?: any): Map<string, Trustee> {
	return new Map(
		(trustees || []).map((trustee: any, index: number) => [
			nextId(`Trustee-id-${index + 1}`),
			{
				email: trustee.email,
				amount: trustee?.amount,
				wallet_address: trustee?.wallet_address,
			},
		])
	);
}
const initialState: ReducerState = {
	trustees: new Map(),
};
type UpdateEmailAction = {
	type: ActionType.UPDATE_TRUSTEES;
	payload: { email?: string; key: string };
};
type UpdateAmountAction = {
	type: ActionType.UPDATE_AMOUNT;
	payload: { amount?: string; key: string };
};
type UpdateWalletAction = {
	type: ActionType.UPDATE_WALLET;
	payload: { wallet_address?: string; key: string };
};
function updateTrustees({ trustees, key, email }: any): Map<string, Trustee> {
	trustees.set(key, {
		...trustees.get(key),
		email,
	});

	return new Map(trustees);
}
function addNewEmail(trustees: Map<string, Trustee>): Map<string, Trustee> {
	trustees.set(nextId(`trustees-id-${trustees.size + 1}`), {
		email: undefined,
		amount: undefined,
		wallet_address: undefined,
	});
	return trustees;
}

function updateAmount({ trustees, key, amount }: any): Map<string, Trustee> {
	trustees.set(key, {
		...trustees.get(key),

		amount,
	});

	return new Map(trustees);
}
function updateWallet({
	trustees,
	key,
	wallet_address,
}: any): Map<string, Trustee> {
	trustees.set(key, {
		...trustees.get(key),

		wallet_address,
	});

	return new Map(trustees);
}
type AddNewEmailAction = { type: ActionType.ADD_FIELD };
type ReducerAction =
	| AddNewEmailAction
	| UpdateEmailAction
	| UpdateAmountAction
	| UpdateWalletAction;

export const useTrusteesHook = (setValue: any) => {
	function trusteesReducer(
		state: ReducerState,
		action: ReducerAction
	): ReducerState {
		switch (action.type) {
			case ActionType.ADD_FIELD:
				return {
					trustees: addNewEmail(state.trustees),
				};
			case ActionType.UPDATE_TRUSTEES:
				return {
					trustees: updateTrustees({
						trustees: state.trustees,
						key: action.payload.key,
						email: action.payload?.email,
					}),
				};
			case ActionType.UPDATE_AMOUNT:
				return {
					trustees: updateAmount({
						trustees: state.trustees,
						key: action.payload.key,
						amount: action.payload?.amount,
					}),
				};
			case ActionType.UPDATE_WALLET:
				return {
					trustees: updateWallet({
						trustees: state.trustees,
						key: action.payload.key,
						wallet_address: action.payload?.wallet_address,
					}),
				};

			default:
				return state;
		}
	}
	const [state, dispatch] = useReducer(trusteesReducer, {
		...initialState,
		trustees: defaultTrustees([""]),
	});

	const updateValue = useCallback(
		(type: string) => {
			if (setValue) {
				if (type === "email") {
					const trustees = Array.from(state.trustees).map(([key, email]) => ({
						...email,
						email: email.email,
						amount: email.amount,
						wallet_address: email.wallet_address,
					}));

					setValue(
						trustees.map((item: any) => ({
							email: item.email,
							amount: item.amount,
							wallet_address: item.wallet_address,
						}))
					);
				} else if (type === "wallet") {
					const trustees = Array.from(state.trustees).map(([key, email]) => ({
						...email,
						email: email.email,
						amount: email.amount,
						wallet_address: email.wallet_address,
					}));

					setValue(
						trustees.map((item: any) => ({
							email: item.email,
							amount: item.amount,
							wallet_address: item.wallet_address,
						}))
					);
				} else if (type === "amount") {
					const trustees = Array.from(state.trustees).map(([key, email]) => ({
						...email,
						email: email.email,
						amount: email.amount,
						wallet_address: email.wallet_address,
					}));

					setValue(
						trustees.map((item: any) => ({
							email: item.email,
							amount: item.amount,
							wallet_address: item.wallet_address,
						}))
					);
				}
			}
		},
		[setValue, state.trustees]
	);
	const onChangeEmail = useCallback(
		async (e: ChangeEvent<HTMLInputElement>, key: string) => {
			const { value } = e.target;
			await dispatch({
				type: ActionType.UPDATE_TRUSTEES,
				payload: { email: value, key },
			});
			updateValue("email");
		},
		[updateValue]
	);
	const onChangeAmount = useCallback(
		async (e: ChangeEvent<HTMLInputElement>, key: string) => {
			const { value } = e.target;
			await dispatch({
				type: ActionType.UPDATE_AMOUNT,
				payload: { amount: value, key },
			});
			updateValue("amount");
		},
		[updateValue]
	);
	const onChangeWallet = useCallback(
		async (e: ChangeEvent<HTMLInputElement>, key: string) => {
			const { value } = e.target;
			await dispatch({
				type: ActionType.UPDATE_WALLET,
				payload: { wallet_address: value, key },
			});
			updateValue("wallet");
		},
		[updateValue]
	);
	const addTrustees = useCallback(async () => {
		dispatch({ type: ActionType.ADD_FIELD });
	}, []);

	return {
		trustees: state.trustees,
		addTrustees,
		onChangeAmount,
		onChangeEmail,
		onChangeWallet,
	};
};
