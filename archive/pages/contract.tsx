import React, { useState } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { ContractsStore } from "../store/DataStore";
import Notification from "../components/notification";
import isNumeric from "validator/lib/isNumeric";

import { useRouter } from "next/router";
import Backarrow from "../components/back-arrow";

const Contract = () => {
	const [error, setError] = useState("");
	const router = useRouter();
	const handleAmount = (amount: any, e?: any) => {
		e.preventDefault();
		if (!isNumeric(amount)) {
			setError("Please put in a valid amount");
		} else {
			router.push("/contract_chain");
		}
	};
	return (
		<section id="xcrow_contract">
			<div className="w-full min-h-screen contract_bg">
				<Backarrow />
				<div className="container px-6 flex flex-col mx-auto pb-24">
					<div className="max-w-md flex flex-col space-y-12 mx-auto mt-10">
						<h1 className="text-2xl text-white font-xcrow_rg text-left md:text-center">
							adehun
						</h1>
						<div className="space-y
						
						-5 text-left md:text-center">
							<h3 className="text-4xl md:text-5xl font-xcrow_smb text-white capitalize">
								Create a contract
							</h3>
							<p className="text-md text-white">
								The app is used for protecting all forms of online transactions
								involving.
							</p>
						</div>
						<div>
							{error !== "" && <Notification kind="error" message={error} />}
						</div>
						<form action=""></form>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Contract;
