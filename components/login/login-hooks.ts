import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import isEmail from "validator/lib/isEmail";

export function useLoginHooks() {
	const [value, setValue] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
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
				setError(e.message);
			}
		}
	};

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
				setSuccess("Logged in Successfully");
				router.push("/");
			} catch (e: any) {
				setError(e.data.data);
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
		success,
		handleGetOTP,
		value,
		error,
	};
}
