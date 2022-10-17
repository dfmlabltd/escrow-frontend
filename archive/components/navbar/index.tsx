import React, { useState } from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import { useStoreContext } from "../../pages/_app";

function Navbar() {
	const {
		ContractsStore: { user, clearAuth },
	} = useStoreContext();
	const [toggleMobile, setToggleMobile] = useState(false);

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
							{user?.email.length > 0 && (
								<Link href={"contract_summary"}>My Contract</Link>
							)}
							<a href="#" className="border border-gray-400 px-3 py-3 rounded">
								Launch Adehun App
							</a>
							{user?.email.length > 0 && (
								<a
									href="#"
									className="border border-gray-400 px-3 py-3 rounded"
									onClick={() => clearAuth()}
								>
									Log out
								</a>
							)}
						</div>

						<button
							id="menu-btn"
							onClick={() => setToggleMobile(!toggleMobile)}
							className={
								toggleMobile
									? "block hamburger open md:hidden focus:outline-none"
									: "block hamburger md:hidden focus:outline-none"
							}
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
							style={
								toggleMobile
									? { display: "flex", zIndex: 5 }
									: { display: "none" }
							}
							className="absolute flex-col items-center self-end py-8 space-y-6 font-bold bg-gray-100 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
						>
							<a href="#">About Us</a>
							<a href="#">How it Works</a>
							<a href="#">Resolution Center</a>
							<a href="#">FAQs</a>
							{user?.email.length > 0 && (
								<Link href={"contract_summary"}>My Contract</Link>
							)}
							<a href="#" className="">
								Launch adehun App
							</a>
							{user?.email.length > 0 && (
								<a href="#" className="" onClick={() => clearAuth()}>
									Log out
								</a>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default observer(Navbar);
