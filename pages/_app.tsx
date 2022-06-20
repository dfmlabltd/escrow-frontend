import "../styles/globals.css";
import "../styles/style.css";
import App from "next/app";
import { useJwt } from "react-jwt";

import { useEffect, useCallback } from "react";

import axios from "axios";
import React, { createContext, useContext } from "react";

import { ContractsArchive } from "../store/store-achieve";
import { IStore } from "../store/store-interface";

export const MobxContext = createContext<IStore>({} as IStore);
export const useStoreContext = () => useContext(MobxContext);

const iSSERVER = typeof window === "undefined";
const getRefresh: any = !iSSERVER
	? JSON.parse(`${localStorage.getItem("access_token")}`)
	: "";
const token = getRefresh?.access;

const MyApp = (props: any) => {
	const { Component, pageProps, err } = props;
	const { isExpired } = useJwt(token);

	const handleTokenRefresh = useCallback(async () => {
		try {
			const res: any = await axios.post(
				`${process.env.BASE_URL}/user/auth/token/refresh/`,
				{
					refresh: getRefresh?.refresh,
				}
			);
			const decod = {
				refresh: getRefresh.refresh,
				access: res.data?.access,
			};
			console.log(decod);
			const resd: any = await axios.get(
				`${process.env.BASE_URL}/user/profile/`,
				{
					headers: {
						Authorization: `Bearer ${res.data?.access}`,
					},
				}
			);

			localStorage.setItem("access_token", JSON.stringify(decod));
			localStorage.setItem("user", JSON.stringify(resd.data));
		} catch (error) {}
	}, []);

	const getUserDetails = useCallback(async () => {
		try {
			const res: any = await axios.get(
				`${process.env.BASE_URL}/user/profile/`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			localStorage.setItem("user", JSON.stringify(res.data));
		} catch (error) {}
	}, []);

	useEffect(() => {
		if (isExpired === true) {
			handleTokenRefresh();
		} else {
			getUserDetails();
		}
	}, [handleTokenRefresh, isExpired]);
	if (typeof window === "undefined") {
		return <></>;
	} else {
		return (
			<MobxContext.Provider value={ContractsArchive}>
				<Component {...pageProps} err={err} />
			</MobxContext.Provider>
		);
	}
};

export default MyApp;
