import React from "react";

export default function Benefits() {
	return (
		<section id="benefits">
			<div className="container mx-auto px-6 py-12 flex flex-col md:flex-row">
				<div className="flex flex-col md:w-1/2">
					<div className="bg-xcrow_secondary px-6 py-12 flex flex-col space-y-4 md:px-8">
						<h3 className="text-xcrow_3xl font-xcrow_smb max-w-md text-white">
							X_crow ls Your Reliable Decentralized X crow Service Provider
						</h3>
						<p className="text-gray-200 max-w-lg text-sm leading-7">
							X crow provides trust and confidence when purchasing on selling
							with an anonymous person by assuring that your money le sefe et
							all times.
						</p>
					</div>
					<div className="bg-white px-6 py-12 space-y-4 md:px-8">
						<h3 className="text-xcrow_3xl font-xcrow_smb max-w-md text-black">
							Secure Every Part Of Your Business With Smart Contract
						</h3>
						<p className="text-gray-700 max-w-lg text-sm leading-7">
							The app is uged for protecting all forms of online transactions
							Involving money transfers using cryptocurrency.
						</p>
						<a
							href="#"
							className="font-medium text-base inline-block border-b-2 text-xcrow_secondary border-xcrow_secondary pt-6"
						>
							Learn more about our unique benefit
						</a>
					</div>
				</div>
				<div className="flex flex-col md:w-1/2">
					<div className="bg-xcrow_secondary h-full px-6 py-12 flex flex-col place-content-center space-y-12 md:px-8">
						<div className="flex flex-col md:space-x-6 md:flex-row">
							<div className="x_crow_benefit_img_container mb-6 md:mb-0">
								<img
									src="assets/Group 11255.png"
									alt="Trustless Transactions"
									className="x_crow_benefit_img_li"
								/>
							</div>
							<div className="flex flex-col space-y-2">
								<h4 className="text-2xl font-xcrow_smb text-white">
									Trustless Transactions
								</h4>
								<p className="text-sm leading-7 text-gray-300">
									Because everything is decontralized and autonomous you will
									never have to disclose your data or worry about your funds
									being safe with us.
								</p>
							</div>
						</div>
						<div className="flex flex-col md:space-x-6 md:flex-row">
							<div className="x_crow_benefit_img_container mb-6 md:mb-0">
								<img
									src="assets/Group 11256.png"
									alt="Multichain And Payment Channels"
									className="x_crow_benefit_img_li"
								/>
							</div>
							<div className="flex flex-col space-y-2">
								<h4 className="text-2xl font-xcrow_smb text-white">
									Multichain And Payment Channels
								</h4>
								<p className="text-sm leading-7 text-gray-300">
									We support traditional payment methods such es direct deposit
									to a local bank, stipe, and Pay Pal, as well as multiple
									blockchain network liko Ethercum, Solana etc.
								</p>
							</div>
						</div>
						<div className="flex flex-col md:space-x-6 md:flex-row">
							<div className="x_crow_benefit_img_container mb-6 md:mb-0">
								<img
									src="assets/Group 11257.png"
									alt="Easy Conflict Resolution"
									className="x_crow_benefit_img_li"
								/>
							</div>
							<div className="flex flex-col space-y-2">
								<h4 className="text-2xl font-xcrow_smb text-white">
									Easy Conflict Resolution
								</h4>
								<p className="text-sm leading-7 text-gray-300">
									We offen a community-based mediation service that lowers
									dispute resolution costs and ensures that both parties reach
									an Agreement as quick as possible
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
