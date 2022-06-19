import React from "react";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { useStoreContext } from "./_app";
import Backarrow from "../components/back-arrow";
function ContractReview() {
	const {
		ContractsStore: { contractInfo, token },
	} = useStoreContext();
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const res: any = await axios.post(
			`${process.env.BASE_URL}/api/contracts`,
			contractInfo,
			{
				headers: {
					Authorizarion: `Bearer ${token.access}`,
				},
			}
		);
	};
	return (
		<div>
			<section id="xcrow_contractDetails">
				<div className="w-full min-h-screen contract_bg">
					<Backarrow />

					<div className="container px-6 flex flex-col mx-auto pb-24">
						<div className="max-w-md flex flex-col space-y-12 mx-auto mt-10">
							<div className="flex justify-center">
								<img
									src="/assets/Logo/Group 37467.svg"
									alt="logo"
									className="w-10 h-10 object-cover"
								/>
							</div>
							<div className="space-y-5 t ext-left md:text-center">
								<h3 className="text-4xl md:text-5xl font-xcrow_smb text-white capitalize">
									Contract Review
								</h3>
								<p className="text-md text-white">
									A contract review is a professional procedure for identifying
									and analyzing important clauses of a contract.
								</p>
							</div>
						</div>
						<div className="w-full md:flex md:justify-center">
							<div className="flex flex-col justify-center space-y-6 mt-8 md:max-w-2xl md:flex-1">
								<div className="bg-gray-900 flex flex-1 flex-col">
									<div className="md:m-4">
										<div className="flex justify-center px-4 py-4">
											<div className="flex flex-col w-full border rounded-xl border-blue-200 border-dashed hover:bg-gray-800 hover:border-gray-300 px-6 pb-8 pt-3 space-y-2">
												<div className="border-b border-gray-600 py-5 space-y-3 overflow-hidden">
													<div className="text-xcrow_secondary">
														<h5 className="font-xcrow_smb text-sm">
															Create A Contract
														</h5>
													</div>
													<div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
														<div className="flex flex-col">
															<h5>Set an amount</h5>
														</div>
														<div className="flex flex-col">
															<span>${contractInfo.amount}</span>
														</div>
													</div>
												</div>

												<div className="border-b border-gray-600 py-5 space-y-3 overflow-hidden">
													<div className="text-xcrow_secondary">
														<h5 className="font-xcrow_smb text-sm">
															Select A Blockchain
														</h5>
													</div>
													<div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
														<div className="flex flex-col">
															<h5>Cryptocurrency</h5>
														</div>
														<div className="flex flex-col">
															<span>{contractInfo.token.name}</span>
														</div>
													</div>
													<div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
														<div className="flex flex-col">
															<h5>Token</h5>
														</div>
														<div className="flex flex-col">
															<span>{contractInfo.coin.name}</span>
														</div>
													</div>
												</div>

												<div className="border-b border-gray-600 py-5 space-y-3 overflow-hidden">
													<div className="text-xcrow_secondary">
														<h5 className="font-xcrow_smb text-sm">
															Depositor Requirement
														</h5>
													</div>
													{contractInfo?.depositors.map(
														(item: any, index: any) => (
															<>
																<div className="text-white">
																	<h5 className="font-xcrow_smb text-sm">
																		Milestone {index + 1}
																	</h5>
																</div>
																<div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
																	<div className="flex flex-col">
																		<h5>Amount</h5>
																	</div>
																	<div className="flex flex-col">
																		<span>${item.amount}</span>
																	</div>
																</div>
																<div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
																	<div className="flex flex-col">
																		<h5>Wallet Address</h5>
																	</div>
																	<div className="flex flex-col">
																		<span>{item.wallet_address}</span>
																	</div>
																</div>
																<div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
																	<div className="flex flex-col">
																		<h5>Email</h5>
																	</div>
																	<div className="flex flex-col">
																		<span>{item.email}</span>
																	</div>
																</div>
															</>
														)
													)}
												</div>

												<div className="border-b border-gray-600 py-5 space-y-3 overflow-hidden">
													<div className="text-xcrow_secondary">
														<h5 className="font-xcrow_smb text-sm">
															Trustee Requirement
														</h5>
													</div>
													{contractInfo?.trustees.map(
														(item: any, index: any) => (
															<>
																<div className="text-white">
																	<h5 className="font-xcrow_smb text-sm">
																		Milestone {index + 1}
																	</h5>
																</div>
																<div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
																	<div className="flex flex-col">
																		<h5>Amount</h5>
																	</div>
																	<div className="flex flex-col">
																		<span>${item.amount}</span>
																	</div>
																</div>
																<div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
																	<div className="flex flex-col">
																		<h5>Wallet Address</h5>
																	</div>
																	<div className="flex flex-col">
																		<span>{item.wallet_address}</span>
																	</div>
																</div>
																<div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
																	<div className="flex flex-col">
																		<h5>Email</h5>
																	</div>
																	<div className="flex flex-col">
																		<span>{item.email}</span>
																	</div>
																</div>
															</>
														)
													)}
												</div>

												<div className="border-b border-gray-600 py-5 space-y-3 overflow-hidden">
													<div className="text-xcrow_secondary">
														<h5 className="font-xcrow_smb text-sm">
															Contract Details
														</h5>
													</div>
													<div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
														<div className="flex flex-col">
															<h5>Contract Title</h5>
														</div>
														<div className="flex flex-col">
															<span>{contractInfo.title}</span>
														</div>
													</div>

													<div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
														<div className="flex flex-col">
															<h5>Automatic Withdraw</h5>
														</div>
														<div className="flex flex-col">
															<span>
																{contractInfo.auto_withdrawal === true
																	? "Active"
																	: "Inactive"}
															</span>
														</div>
													</div>
												</div>
												<div className="border-b border-gray-600 py-5 space-y-3 overflow-hidden">
													<div className="text-xcrow_secondary">
														<h5 className="font-xcrow_smb text-sm">
															Agreement File
														</h5>
													</div>
													<div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
														<div className="flex flex-col">
															<h5>upload</h5>
														</div>
														<div className="flex flex-col">
															<span>{contractInfo?.agreement_contract[0]}</span>
															<p>{contractInfo?.agreement_contract[1]}</p>
														</div>
													</div>
												</div>

												<div className="relative flex flex-col pt-8">
													<button className="uppercase bg-xcrow_secondary w-full px-4 py-4 rounded-xl text-white text-base">
														Send Contract
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default observer(ContractReview);
