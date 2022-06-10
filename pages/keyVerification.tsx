import React from "react";
import Backarrow from "../components/back-arrow";
import Notification from "../components/notification";
import { useLoginHooks } from "../components/login/login-hooks";

export default function KeyVerification() {
	const {
		password,
		handlePassword,
		handleLogin,
		handleGetOTP,
		error,
		success,
	} = useLoginHooks();

	const iSSERVER = typeof window === "undefined";
	const getValue = !iSSERVER ? localStorage.getItem("email") : "";
	return (
		<section id="xcrow_contract">
			<div className="w-full min-h-screen contract_bg">
				<Backarrow />

				<div className="container px-6 flex flex-col mx-auto pb-24">
					<div className="max-w-md flex flex-col space-y-12 mx-auto mt-10">
						<h1 className="text-2xl text-white font-xcrow_rg text-left">
							a dehun
						</h1>
						<div className="space-y-5 text-left">
							<h3 className="text-4xl md:text-5xl font-xcrow_smb text-white capitalize">
								Key verification
							</h3>
							<p className="text-md text-white">
								Enter the one-time key that was sent to {getValue}
							</p>
						</div>

						<form action="">
							<div className="w-full flex flex-col space-y-10">
								<div className="relative form-input">
									<div className="relative mt-2">
										{error !== "" && (
											<Notification message={error} kind="error" />
										)}
										{success !== "" && (
											<Notification message={success} kind="success" />
										)}
										<div className="w-full flex flex-row space-x-4 items-center">
											<div className="h-10 flex items-center text-white">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													style={{
														fill: "rgb(255, 255, 255)",
														transform: "",
														msFilter: "",
													}}
												>
													<path d="M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"></path>
												</svg>
											</div>
											<input
												type="password"
												id="contractamount"
												value={password}
												onChange={handlePassword}
												placeholder="***************"
												className="py-2 h-10 border-b w-full bg-transparent border-gray-400 focus:outline-none focus:shadow-outline text-white text-base pr-32"
											/>
										</div>
									</div>
								</div>

								<div className="relative flex flex-col pt-8">
									<button
										onClick={handleLogin}
										className="bg-xcrow_secondary w-full px-4 py-4 rounded-xl text-white text-base"
									>
										Submit
									</button>
									<p className="text-white mt-5">
										Didn't receive the key?{" "}
										<button onClick={(e) => handleGetOTP(e, getValue)}>
											<span className="text-xcrow_secondary font-xcrow_smb">
												Resend
											</span>
										</button>
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
