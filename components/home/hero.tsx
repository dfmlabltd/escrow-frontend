import React from "react";
import Navbar from "../navbar";
import Link from "next/link";
export default function Hero() {
	return (
		<section
			id="header_section"
			className="h-auto xcrow_theme_bg md:min-h-screen"
		>
			<Navbar />
			<div id="hero">
				<div className="container mx-auto px-6 flex flex-col py-20 space-y-6 items-center justify-between md:flex-row md:space-y-0">
					<div className="flex flex-col space-y-6 md:w-1/2">
						<div id="slider_counter" className="flex flex-row space-x-1">
							<span className="counter counter_open"></span>
							<span className="counter"></span>
							<span className="counter"></span>
						</div>

						<h2 className="text-4xl md:text-5xl font-xcrow_smb text-white">
							<span>Remove</span>
							<span className="block">The Involvement</span>
							<span>Of Any Third Party</span>
						</h2>
						<p className="text-white max-w-lg font-xcrow_rg">
							<span className="font-bold">X_Crow</span> app provides and
							guarantees trust between two parties using smart contract and DAO
							for conflict resolution
						</p>
						<div className="flex flex-col space-y-6 space-x-0 pt-10 relative md:flex-row md:space-y-0 md:space-x-6">
							<Link href={"/contract_chain"}>
								<button className="px-16 text-white text-sm py-4 bg-xcrow_secondary rounded">
									Create Contract
								</button>
							</Link>
							<Link href="/login">
								<button className="px-16 text-white text-sm py-4 border rounded">
									Log In
								</button>
							</Link>
						</div>
					</div>

					<div className="flex flex-col items-center md:w-1/2 md:items-end">
						<img src="assets/Hero.png" alt="Adehun" className="w-full" />
					</div>
				</div>
			</div>
		</section>
	);
}
