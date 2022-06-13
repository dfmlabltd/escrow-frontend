import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "./home";
import { useJwt } from "react-jwt";

import Navbar from "../components/navbar";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useCallback } from "react";
import axios from "axios";

const iSSERVER = typeof window === "undefined";
const getRefresh: any = !iSSERVER ? localStorage.getItem("user_token") : "";
var refreshToken = getRefresh ? JSON.parse(getRefresh) : "";
const token = refreshToken?.access;
const Home: NextPage = () => {
	const { isExpired } = useJwt(token);
	const handleTokenRefresh = useCallback(async () => {
		try {
			const res: any = await axios.post(
				`${process.env.BASE_URL}/user/auth/token/refresh/`,
				{
					refresh: refreshToken?.refresh,
				}
			);
			const decod = {
				refresh: refreshToken.refresh,
				access: res.data?.access,
			};
			localStorage.setItem("access_token", JSON.stringify(decod));
		} catch (error) {}
	}, []);

	useEffect(() => {
		console.log(isExpired);
		if (isExpired) {
			handleTokenRefresh();
		}
	}, [handleTokenRefresh]);
	return (
		<>
			<HomePage />
		</>
	);
};

export default Home;
