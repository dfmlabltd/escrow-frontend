import React from "react";

export default function Purpose() {
	// const itemcards = [
	//     {

	//     }
	// ]
	return (
		<>
			<section id="xcrow_purpose">
				<div className="container mx-auto px-6 py-24 flex flex-col">
					<div className="space-y-5 max-w-4xl border-l-6 border-xcrow_secondary relative pl-8">
						<span className="text-lg font-xcrow_smb text-xcrow_secondary">
							The Purpose
						</span>
						<h2 className="text-5xl font-xcrow_rg">What is adehun ?</h2>
						<p className="purpose_wrapper text-base leading-7">
							The application can be used with online marketplaces like
							freelancing platforms, product selling platforms, service listing
							platforms, crowdfunding platforms and a direct contract between
							two individuals. The application can be used by buyers and sellers
							engaging in sales of a particular product, service providers like
							freelancers offering professional service to a client far away, or
							a young innovator building a smart solution to solve Africa's
							energy problems but need to raise funds through crowdfunding.
						</p>
						<a
							href="#"
							className="font-xcrow_smb text-base inline-block border-b-2 text-xcrow_secondary border-xcrow_secondary"
						>
							Learn more about adehun
						</a>
					</div>
				</div>
			</section>
			<section id="howItWorks">
				<div className="container mx-auto px-6 py-12 flex flex-col">
					<div className="flex flex-col justify-center space-y-6 mx-auto text-center">
						<h2 className="text-4xl font-xcrow_rg md:text-5xl">How It Works</h2>
						<p className="text-base font-xcrow_rg max-w-lg leading-7">
							The app is used for protecting all forms of online <br />
							transactions involving money transfers using cryptocurrency.
						</p>
					</div>
					<div className="flex flex-col flex-wrap justify-center md:flex-row md:space-x-5">
						<div className="bg-white flex flex-col justify-center space-y-6 mt-14 text-center px-10 py-7 md:w-x_18 rounded border-2 border-gray-100 hover:shadow-xl hover:border-white group">
							<img
								src="assets/Group 11250.svg"
								alt="Work Out A Contract"
								className="adehun_img mx-auto"
							/>
							<h4 className="text-x_base font-xcrow_rg group-hover:font-semibold">
								Work Out A Contract
							</h4>
							<p className="text-sm pb-6">
								The app is used for protecting all forms of online transactions
								involving.
							</p>
						</div>
						<div className="bg-white flex flex-col justify-center space-y-6 mt-14 text-center px-10 py-7 md:w-x_18 rounded border-2 border-gray-100 hover:shadow-xl hover:border-white group">
							<img
								src="assets/Group 11251.svg"
								alt="Send Contract To Client"
								className="adehun_img mx-auto"
							/>
							<h4 className="text-x_base font-xcrow_rg group-hover:font-semibold">
								Send Contract To Client
							</h4>
							<p className="text-sm pb-6">
								The app is used for protecting all forms of online transactions
								involving.
							</p>
						</div>
						<div className="bg-white flex flex-col justify-center space-y-6 mt-14 text-center px-10 py-7 md:w-x_18 rounded border-2 border-gray-100 hover:shadow-xl hover:border-white group group">
							<img
								src="assets/Group 11252.svg"
								alt="Contract Get Funded By The Clien"
								className="adehun_img mx-auto"
							/>
							<h4 className="text-x_base font-xcrow_rg group-hover:font-semibold">
								Contract Get Funded By The Client
							</h4>
							<p className="text-sm pb-6">
								The app is used for protecting all forms of online transactions
								involving.
							</p>
						</div>
						<div className="bg-white flex flex-col justify-center space-y-6 mt-14 text-center px-10 py-7 md:w-x_18 rounded border-2 border-gray-100 hover:shadow-xl hover:border-white group">
							<img
								src="assets/Group 11254.png"
								alt="Fund ls Locked Up in The Smart Contract"
								className="adehun_img mx-auto"
							/>
							<h4 className="text-x_base font-xcrow_rg group-hover:font-semibold">
								Fund ls Locked Up in The Smart Contract
							</h4>
							<p className="text-sm pb-6">
								The app is used for protecting all forms of online transactions
								involving.
							</p>
						</div>
						<div className="bg-white flex flex-col justify-center space-y-6 mt-14 text-center px-10 py-7 md:w-x_18 rounded border-2 border-gray-100 hover:shadow-xl hover:border-white group">
							<img
								src="assets/Group 11253.png"
								alt="Fund Released After Reaching A Consensus"
								className="adehun_img mx-auto"
							/>
							<h4 className="text-x_base font-xcrow_rg group-hover:font-semibold">
								Fund Released After Reaching A Consensus
							</h4>
							<p className="text-sm pb-6">
								The app is used for protecting all forms of online transactions
								involving.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
