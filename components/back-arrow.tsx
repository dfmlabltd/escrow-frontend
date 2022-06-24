import React from "react";
import { useRouter } from "next/router";

export default function Backarrow() {
	const router = useRouter();
	return (
		<div className="container px-6 flex flex-col justify-between mx-auto">
			<div className="relativ w-full">
				<nav className="py-9">
					<button
						className="border border-gray-400 p-1 rounded text-white"
						onClick={() => router.back()}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							fill="currentColor"
							className="bi bi-chevron-left"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
							/>
						</svg>
					</button>
				</nav>
			</div>
		</div>
	);
}
