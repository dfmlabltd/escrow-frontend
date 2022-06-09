import React from "react";
import Backarrow from "../components/back-arrow";
export default function ContractDetails() {
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
								Contract Details
							</h3>
							<p className="text-md text-white">
								A contract must include certain fundamental features, such as a
								contract title and contract descriptions.
							</p>
						</div>

						<form action="">
							<div className="w-full flex flex-col space-y-10">
								<div className="relative form-input">
									<label
										htmlFor="contractamount"
										className="text-white text-md"
									>
										Contract title
									</label>
									<div className="relative mt-2">
										<div className="w-full">
											<input
												type="text"
												id="contractamount"
												placeholder="Contract title"
												className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base"
											/>
										</div>
									</div>
								</div>

								<div className="relative form-input">
									<label
										htmlFor="contractamount"
										className="text-white text-md"
									>
										Description
									</label>
									<div className="relative mt-2">
										<div className="w-full">
											<input
												type="text"
												id="contractamount"
												placeholder="Provide a detailed description about your contract"
												className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base"
											/>
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
