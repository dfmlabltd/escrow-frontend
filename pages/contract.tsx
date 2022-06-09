import React from "react";
import Backarrow from "../components/back-arrow";

export default function Contract() {
	return (
		<section id="xcrow_contract">
			<div className="w-full min-h-screen contract_bg">
				<Backarrow />
				<div className="container px-6 flex flex-col mx-auto pb-24">
					<div className="max-w-md flex flex-col space-y-12 mx-auto mt-10">
						<h1 className="text-2xl text-white font-xcrow_rg text-left md:text-center">
							a dehun
						</h1>
						<div className="space-y-5 text-left md:text-center">
							<h3 className="text-4xl md:text-5xl font-xcrow_smb text-white capitalize">
								Create a contract
							</h3>
							<p className="text-md text-white">
								The app is used for protecting all forms of online transactions
								involving.
							</p>
						</div>

						<form action="">
							<div className="w-full flex flex-col space-y-10">
								<div className="relative form-input">
									<label
										htmlFor="contractamount"
										className="text-white text-md"
									>
										Set an amount
									</label>
									<div className="relative mt-2">
										<div className="w-full">
											<input
												type="text"
												id="contractamount"
												placeholder="Enter amount"
												className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
											/>
										</div>
										<div className="absolute top-0 right-0">
											<div className="inline-block relative place-content-center">
												<select className="block appearance-none h-14 bg-xcrow_secondary border border-xcrow_secondary px-5 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-white text-base">
													<option>USD</option>
													<option>EUR</option>
													<option>YEN</option>
													<option>NGN</option>
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

								<div className="relative flex flex-col pt-8">
									<button className="uppercase bg-xcrow_secondary w-full px-4 py-4 rounded-xl text-white text-base">
										Next
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
