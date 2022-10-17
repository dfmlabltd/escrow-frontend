import React, { useState, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useStoreContext } from "../../pages/_app";
import isEmail from "validator/lib/isEmail";

export function useLoginHooks() {
	const [value, setValue] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const {
		ContractsStore: { handleAuth, handleToken, token },
	} = useStoreContext();

	const handleValue = (e: any) => {
		setValue(e.target.value);
	};

	const handleGetOTP = async (e: any, mail?: any) => {
		e.preventDefault();
		if (!isEmail(value) && window.location.pathname === "/login") {
			setError("Invalid Email");
		} else {
			try {
				const res: any = await axios.post(
					`${process.env.BASE_URL}/user/auth/`,
					{
						email: mail !== undefined ? mail : value,
					}
				);
				localStorage.setItem("email", mail !== undefined ? mail : value);
				if (res) router.push("/keyVerification");
			} catch (e: any) {
				toast(e.message);
			}
		}
	};
	const handleTokenRefresh = useCallback(async () => {
		try {
			const res: any = await axios.post(
				`${process.env.BASE_URL}/user/auth/token/refresh/`,
				{
					refresh: token?.refresh,
				}
			);
			const decod = {
				refresh: token.refresh,
				access: res.data?.access,
			};

			localStorage.setItem("access_token", JSON.stringify(decod));

			handleToken(decod);
			return res.data;
		} catch (error) {
			localStorage.setItem("access_token", JSON.stringify({}));
		}
	}, []);

	const getUserDetails = useCallback(async (token: any) => {
		try {
			const res: any = await axios.get(
				`${process.env.BASE_URL}/user/profile/`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			setSuccess("Logged in Successfully");
			localStorage.setItem("user", JSON.stringify(res.data));
			handleAuth(res.data);
			router.push("/");
		} catch (error) {
			localStorage.setItem("user", JSON.stringify({ email: "" }));
		}
	}, []);

	const handleLogin = async (e: any) => {
		e.preventDefault();
		if (password.trim().length === 0) {
			setError("Please Provide OTP");
		} else {
			try {
				const res: any = await axios.post(
					`${process.env.BASE_URL}/user/auth/token/`,
					{
						email: localStorage.getItem("email"),
						password: password,
					}
				);
				localStorage.setItem("access_token", JSON.stringify(res.data));
				handleToken(res.data);
				getUserDetails(res.data.access);
			} catch (e: any) {
				toast(e.message);
			}
		}
	};

	const handlePassword = (e: any) => {
		setPassword(e.target.value);
	};

	return {
		handleValue,
		password,
		handleLogin,
		handlePassword,
		handleTokenRefresh,
		success,
		handleGetOTP,
		value,
		error,
	};
}
