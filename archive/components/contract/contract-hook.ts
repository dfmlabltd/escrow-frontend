import axios from "axios";
import { useStoreContext } from "../../pages/_app";
import { useState, useEffect, useCallback } from "react";
interface Itoken {
	name: string;
	icon: string;
}
[];
export const useContractHook = () => {
	const [tokens, setTokens] = useState<Itoken[]>([]);
	const {
		ContractsStore: { handleChange },
	} = useStoreContext();

	const [coins, setCoins] = useState<any>();
	const handleFetchTokens = useCallback(async () => {
		const res = await axios.get(`${process.env.BASE_URL}/crypto/network/`);
		setTokens(res.data);
		handleChange("token", res.data[0]);
	}, []);

	const handleFetchCoins = useCallback(async (id: string) => {
		const res = await axios.get(`${process.env.BASE_URL}/crypto/network/${id}`);
		setCoins(res.data);
		handleChange("coin", res.data[0]);
	}, []);

	useEffect(() => {
		handleFetchTokens();
	}, [handleFetchTokens]);
	useEffect(() => {
		handleFetchCoins("1");
	}, [handleFetchCoins]);
	return {
		tokens,
		handleFetchCoins,
		coins,
	};
};
