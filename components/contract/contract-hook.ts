import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export const useContractHook = () => {
	const [tokens, setTokens] = useState<any>();
	const [coins, setCoins] = useState<any>();
	const handleFetchTokens = useCallback(async () => {
		const res = await axios.get(`${process.env.BASE_URL}/crypto/network/`);
		setTokens(res.data);
	}, []);

	const handleFetchCoins = useCallback(async (id: string) => {
		const res = await axios.get(`${process.env.BASE_URL}/crypto/network/${id}`);
		setCoins(res.data);
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
