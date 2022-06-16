import React, { useState } from "react";
import { useStoreContext } from "./_app";
import { observer } from "mobx-react-lite";
import Notification from "../components/notification";
import { useRouter } from "next/router";
import Backarrow from "../components/back-arrow";
function ContractDetails() {
	const [error, setError] = useState("");

	const router = useRouter();
	const {
		ContractsStore: {
			handleChange,
			contractInfo: { title, wait_day, auto_withdrawal },
		},
	} = useStoreContext();
	const handleNext = (e: any) => {
		e.preventDefault();
		if (title.trim() === "") {
			setError("Please Input a title");
		} else if (wait_day < 1) {
			setError("Please Input a valid wait day");
		} else {
			router.push(`agreementUpload`);
		}
	};
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
						{error !== "" && <Notification kind="error" message={error} />}

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
												value={title}
												onChange={(e: any) =>
													handleChange("title", e.target.value)
												}
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
										Dispute Wait Day
									</label>
									<div className="relative mt-2">
										<div className="w-full">
											<input
												type="number"
												value={wait_day}
												onChange={(e: any) =>
													handleChange("wait_day", e.target.value)
												}
												id="contractamount"
												placeholder="What's the waiting time to resolve conflicts"
												className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base"
											/>
										</div>
									</div>
								</div>
								<div className="flex space-x-3 justify-center">
									<label
										htmlFor="default-toggle"
										className="inline-flex relative items-center cursor-pointer"
									>
										<input
											type="checkbox"
											onChange={(e: any) =>
												handleChange("auto_withdrawal", e.target.checked)
											}
											checked={auto_withdrawal === true}
											className="w-4 h-4 border-0 rounded-md focus:ring-0"
										/>
									</label>
									<label htmlFor="milestone" className="text-white text-md">
										Auto withdrawal{" "}
										<span className="text-sm text-gray-400">(optionals)</span>
									</label>
								</div>

								<div className="relative flex flex-col pt-8">
									<button
										onClick={handleNext}
										className="uppercase bg-xcrow_secondary w-full px-4 py-4 rounded-xl text-white text-base"
									>
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

export default observer(ContractDetails);
