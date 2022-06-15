import React from "react";

export default function Navbar() {
	return (
		<>
			<section id="header_section" className=" ">
				<div className="border-b border-gray-500">
					<nav className="container px-6 flex flex-row items-center justify-between mx-auto py-9">
						<img src="/assets/Logo/Logo.png" alt="" style={{ width: "10%" }} />
						<div className="hidden font-xcrow_rg text-white flex flex-row space-x-6 text-sm md:block">
							<a href="#">About Us</a>
							<a href="#">How it Works</a>
							<a href="#">Resolution Center</a>
							<a href="#">FAQs</a>
							<a href="#">My Contract</a>
							<a href="#" className="border border-gray-400 px-3 py-3 rounded">
								Launch Adehun App
							</a>
						</div>

						<button
							id="menu-btn"
							className="block hamburger md:hidden focus:outline-none"
						>
							<span className="hamburger-top"></span>
							<span className="hamburger-middle"></span>
							<span className="hamburger-bottom"></span>
						</button>
					</nav>
				</div>
				<div className="container mx-auto p-6 absolute">
					<div className="md:hidden">
						<div
							id="menu"
							className="absolute flex-col items-center hidden self-end py-8 space-y-6 font-bold bg-gray-100 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
						>
							<a href="#">About Us</a>
							<a href="#">How it Works</a>
							<a href="#">Resolution Center</a>
							<a href="#">FAQs</a>
							<a href="#">My Contract</a>
							<a href="#" className="">
								Launch X_Crow App
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
