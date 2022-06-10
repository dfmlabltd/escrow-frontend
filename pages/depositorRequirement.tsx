import React from "react";
import Backarrow from "../components/back-arrow";

export default function DepositorRequirement() {
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
											value=""
											id="default-toggle"
											className="sr-only peer"
										/>
										<div className="w-11 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-xcrow_secondary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-xcrow_secondary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-400"></div>
									</label>
								</div>

								<div className="flex flex-col space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
									<div className="relative md:w-1/3">
										<label
											htmlFor="cryptocurrency"
											className="text-white text-md"
										>
											Set Cryptocurrency
										</label>
										<div className="relative mt-2">
											<div className="w-full">
												<input
													type="text"
													id="cryptocurrency"
													placeholder="CELO"
													className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
												/>
											</div>
											<div className="absolute top-0 right-0">
												<div className="inline-block relative place-content-center">
													<select className="block appearance-none h-14 bg-xcrow_secondary border border-xcrow_secondary px-5 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-white text-base">
														<option>Default</option>
														<option>Option 1</option>
														<option>Option 2</option>
														<option>Option 3</option>
													</select>
													<div
														className="pointer-events-none absolute inset-y-0 flex items-center text-white"
														style={{ right: "10px" }}
													>
														<svg
															className="fill-current h-5 w-5"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
														>
															<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
														</svg>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="relative md:w-1/3">
										<label htmlFor="tokenName" className="text-white text-md">
											Set token name
										</label>
										<div className="relative mt-2">
											<div className="w-full">
												<input
													type="text"
													id="tokenName"
													placeholder="Search token name"
													className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
												/>
											</div>
											<div className="absolute top-0 right-0">
												<div className="inline-block relative place-content-center">
													<select className="block appearance-none h-14 bg-xcrow_secondary border border-xcrow_secondary px-5 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-white text-base">
														<option>cUSD</option>
														<option>Option 1</option>
														<option>Option 2</option>
														<option>Option 3</option>
													</select>
													<div
														className="pointer-events-none absolute inset-y-0 flex items-center text-white"
														style={{ right: "10px" }}
													>
														<svg
															className="fill-current h-5 w-5"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
														>
															<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
														</svg>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="relative md:w-1/3">
										<label
											htmlFor="settokenName"
											className="text-white text-md"
										>
											Set token name
										</label>
										<div className="relative mt-2">
											<div className="w-full">
												<input
													type="text"
													id="settokenName"
													placeholder="Search token name"
													className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
												/>
											</div>
											<div className="absolute top-0 right-0">
												<div className="inline-block relative place-content-center">
													<select className="block appearance-none h-14 bg-xcrow_secondary border border-xcrow_secondary px-5 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-white text-base">
														<option>cUSD</option>
														<option>Option 1</option>
														<option>Option 2</option>
														<option>Option 3</option>
													</select>
													<div
														className="pointer-events-none absolute inset-y-0 flex items-center text-white"
														style={{ right: "10px" }}
													>
														<svg
															className="fill-current h-5 w-5"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
														>
															<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
														</svg>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="flex flex-row space-x-3 items-center">
									<div className="bg-xcrow_default milestone_add">
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
							<button className="uppercase bg-xcrow_secondary w-full px-4 py-4 rounded-xl text-white text-base">
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
