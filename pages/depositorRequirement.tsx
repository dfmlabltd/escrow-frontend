import React, { useState } from "react";
import Backarrow from "../components/back-arrow";
import Notification from "../components/notification";
import { useRouter } from "next/router";
import isNumeric from "validator/lib/isNumeric";
import isEmail from "validator/lib/isEmail";
import isEthereumAddress from "validator/lib/isEthereumAddress";
import { useTrusteesHook } from "../components/trustees/trustees";

export default function DepositorRequirement() {
	const [value, setValue] = useState<any>();
	const [check, setCheck] = useState(false);
	const [error, setError] = useState("");

	const router = useRouter();
	const {
		trustees,
		addTrustees,
		onChangeEmail,
		onChangeAmount,
		onChangeWallet,
	} = useTrusteesHook(setValue);
	const handleSubmit = () => {
		if (check) {
			router.push("/contractDetails");
		} else {
			if (value === undefined) {
				setError("Please fill in fields");
			} else {
				const valueFilter = value?.filter(
					(item: any) => item.email !== undefined || item.amount !== undefined
				);
				const res = valueFilter.map((item: any) => {
					if (
						item.email === undefined ||
						item.amount === undefined ||
						item.wallet_address === undefined
					) {
						return true;
					} else if (!isEmail(item.email)) {
						return true;
					} else if (!isNumeric(item.amount)) {
						return true;
					} else if (!isEthereumAddress(item.wallet_address)) {
						return true;
					}
				});
				if (res.includes(true)) {
					setError("Please fill all required fields");
				} else {
					router.push("/depositorRequirement");
				}
			}
		}
	};
	return (
		<section id="xcrow_contract">
			<div className="w-full min-h-screen contract_bg">
				<Backarrow />

				<div className="container px-6 flex flex-col mx-auto pb-24">
					<div className="max-w-md flex flex-col space-y-12 mt-10">
						<h1 className="text-2xl text-white font-xcrow_rg">a dehun</h1>
						<div className="space-y-5 ">
							<h3 className="text-4xl md:text-5xl font-xcrow_smb text-white capitalize">
								Depositor's Requirement
							</h3>
							<p className="text-md text-white">
								Set up milestone and discuss them with your trustee, along with
								the payment terms for each
							</p>
						</div>
					</div>
					<div className="flex flex-col">
						<form action="">
							<div className="w-full flex flex-col space-y-10">
								<div className="flex space-x-3 pt-20">
									<label htmlFor="milestone" className="text-white text-md">
										Milestone (optionals)
									</label>
									<label
										htmlFor="default-toggle"
										className="inline-flex relative items-center cursor-pointer"
									>
										<input
											type="checkbox"
											onChange={(e) => setCheck(e.target.checked)}
											id="default-toggle"
											className="sr-only peer"
										/>
										<div className="w-11 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-xcrow_secondary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-xcrow_secondary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-400"></div>
									</label>
								</div>
								{error !== "" && (
									<div>
										<Notification kind="error" message={error} />
									</div>
								)}
								{Array.from(trustees).map(([key, email], index) => (
									<div className="flex flex-col pt-8" key={key}>
										<form action="">
											<div className="w-full flex flex-col space-y-10">
												<div className="flex flex-col space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
													<div className="relative md:w-1/3">
														<label
															htmlFor="cryptocurrency"
															className="text-white text-md"
														>
															Email Address
														</label>
														<div className="relative mt-2">
															<div className="w-full">
																<input
																	type="text"
																	name={key}
																	value={email.email}
																	key={key}
																	id={key}
																	onChange={(e) => onChangeEmail(e, key)}
																	placeholder="Enter Trustee's Email Address"
																	className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
																/>
															</div>
														</div>
													</div>

													<div className="relative md:w-1/3">
														<label
															htmlFor="tokenName"
															className="text-white text-md"
														>
															Amount
														</label>
														<div className="relative mt-2">
															<div className="w-full">
																<input
																	type="number"
																	name={key}
																	value={email.amount}
																	key={key}
																	id={key}
																	onChange={(e) => onChangeAmount(e, key)}
																	placeholder="Amount"
																	className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
																/>
															</div>
														</div>
													</div>

													<div className="relative md:w-1/3">
														<label
															htmlFor="tokenName"
															className="text-white text-md"
														>
															Wallet Address
														</label>
														<div className="relative mt-2">
															<div className="w-full">
																<input
																	type="text"
																	name={key}
																	value={email.wallet_address}
																	key={key}
																	id={key}
																	onChange={(e) => onChangeWallet(e, key)}
																	placeholder="Wallet Address"
																	className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								))}

								<div className="flex flex-row space-x-3 items-center">
									<div
										className="bg-xcrow_default milestone_add"
										onClick={addTrustees}
									>
										<span></span>
										<span></span>
									</div>
									<span className="text-white text-md">Add milestone</span>
								</div>
							</div>
						</form>
					</div>

					<div className="max-w-md flex flex-col space-y-12 mt-10">
						<div className="w-full flex flex-col pt-8">
							<button
								onClick={handleSubmit}
								className="uppercase bg-xcrow_secondary w-full px-4 py-4 rounded-xl text-white text-base"
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
