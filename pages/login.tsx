import React from "react";
import Backarrow from "../components/back-arrow";
import Notification from "../components/notification";
import { useLoginHooks } from "../components/login/login-hooks";

export default function Login() {
	const { handleValue, error, handleGetOTP } = useLoginHooks();

	return (
		<section id="xcrow_contract">
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
						<div className="space-y-5 text-left">
							<h3 className="text-4xl md:text-5xl font-xcrow_smb text-white capitalize">
								Welcome to Adehun
							</h3>
							<p className="text-md text-white">
								An application that is intended to be used for protecting all
								forms of online transaction involving money transfer using
								cryptocurrency
							</p>
						</div>

						<form action="">
							<div className="w-full flex flex-col space-y-10">
								<div className="relative form-input">
									<div className="relative mt-2">
										{error !== "" && (
											<Notification message={error} kind="error" />
										)}
										<div className="w-full flex flex-row space-x-4 items-center">
											<div className="h-10 flex items-center text-white">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													style={{
														fill: "rgb(255, 255, 255);transform: ;msFilter:;",
													}}
												>
													<path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
												</svg>
											</div>

											<input
												type="text"
												id="contractamount"
												onChange={handleValue}
												placeholder="Enter your email"
												className="py-2 h-10 border-b w-full bg-transparent border-gray-400 focus:outline-none focus:shadow-outline text-white text-base pr-32"
											/>
										</div>
									</div>
								</div>

								<div className="relative flex flex-col pt-8">
									<button
										onClick={handleGetOTP}
										className="bg-xcrow_secondary w-full px-4 py-4 rounded-xl text-white text-base"
									>
										Send me an OTP
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
