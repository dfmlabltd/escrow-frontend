import React, { useState } from "react";
import Backarrow from "../components/back-arrow";
import Notification from "../components/notification";
import { useRouter } from "next/router";
import isNumeric from "validator/lib/isNumeric";
import isEmail from "validator/lib/isEmail";
import isEthereumAddress from "validator/lib/isEthereumAddress";
import { RadioGroup } from "@headlessui/react";
import { useTrusteesHook } from "../components/trustees/trustees";
const plans = [
	{
		name: "I'm the Depositor",
	},
	{
		name: "Other People",
	},
	{
		name: "Anyone can deposit",
	},
];
function Example({ check, setCheck }: any) {
	console.log(check);
	return (
		<div className="w-full px-4 py-16 ">
			<div className="mx-auto w-full ">
				<RadioGroup value={check} onChange={setCheck}>
					<div
						className="space-y-2 d-flex mt-5"
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "space-between",
							alignItems: "center",
							width: "60%",
						}}
					>
						{plans.map((plan) => (
							<RadioGroup.Option
								key={plan.name}
								value={plan.name}
								className={({ active, checked }) =>
									`${
										active
											? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
											: ""
									}
                  ${checked ? "bg-xcrow_secondary text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
								}
							>
								{({ active, checked }) => (
									<>
										<div className="flex w-full items-center justify-between">
											<div className="flex items-center">
												<div className="text-sm">
													<RadioGroup.Label
														as="p"
														className={`font-medium  ${
															checked ? "text-white" : "text-gray-800 font-bold"
														}`}
													>
														{plan.name}
													</RadioGroup.Label>
												</div>
											</div>
											{checked && (
												<div className="shrink-0 text-white">
													<CheckIcon className="h-6 w-6" />
												</div>
											)}
										</div>
									</>
								)}
							</RadioGroup.Option>
						))}
					</div>
				</RadioGroup>
			</div>
		</div>
	);
}

function CheckIcon(props: any) {
	return (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
			<path
				d="M7 13l3 3 7-7"
				stroke="#fff"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
export default function DepositorRequirement() {
	const [value, setValue] = useState<any>();
	const [check, setCheck] = useState("depositor");
	const [error, setError] = useState("");
	console.log(check);
	const router = useRouter();
	const {
		trustees,
		addTrustees,
		onChangeEmail,
		onChangeAmount,
		onChangeWallet,
		remove,
	} = useTrusteesHook(setValue);
	const handleSubmit = () => {
		if (check !== "anyone") {
			router.push("/contractDetails");
		} else {
			console.log(value);
			if (value === undefined) {
				setError("Please fill in fields");
			} else {
				if (value?.length === 1) {
					if (
						value[0].email === undefined ||
						value[0].amount === undefined ||
						value[0].wallet_address === undefined
					) {
						if (!isEmail(value[0].email)) {
							setError("Please enter a valid email");
						} else if (!isNumeric(value[0].amount)) {
							setError("Please enter a valid amount");
						} else if (!isEthereumAddress(value[0].wallet_address)) {
							setError("Please fill in a valid address");
						}
						setError("Please fill in the required fields");
					} else {
						setError("");
						router.push("/contractDetails");
					}
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
						router.push("/contractDetails");
					}
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
								{error !== "" && (
									<div>
										<Notification kind="error" message={error} />
									</div>
								)}
								<Example check={check} setCheck={setCheck} />
								{check === "Anyone can deposit" && (
									<>
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

															<div className="relative md:w-2/3">
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

															<div className="relative md:w-2/3">
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
															{index !== 0 && (
																<div
																	className="relative"
																	style={{
																		display: "flex",
																		alignItems: "center",
																		justifyContent: "center",
																	}}
																>
																	<p
																		className="text-white text-md mt-8 cursor-pointer"
																		onClick={() => remove(key)}
																	>
																		Remove
																	</p>
																</div>
															)}
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
											<span className="text-white text-md">Add Depositor</span>
										</div>
									</>
								)}
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
