import React from "react";

export default function ContractSummary() {
	return (
		<div>
			{" "}
			<section id="header" className="bg-xcrow_default">
				<div className="container px-6 flex flex-col mx-auto">
					<nav className="flex flex-row space-x-5 items-center py-6">
						<a href="#" className="outline-none">
							<img
								src="/assets/Logo/Group 37467.svg"
								alt="My Contract"
								className="contract_header_logo"
							/>
						</a>
						<h4 className="text-base text-white font-xcrow_smb">My Contract</h4>
					</nav>
					<div className="bg-white flex flex-col pt-2 px-8">
						<div className="flex flex-col justify-between py-3 md:flex-row md:space-x-4 md:items-center">
							<h3 className="font-xcrow_smb text-base">
								ghostworkspace@gmail.com
							</h3>
							<button className="text-sm bg-xcrow_secondary px-6 py-2 rounded text-white mt-2 md:mt-0 outline-none">
								Add New Contract
							</button>
						</div>
						<div className="text-sm font-medium text-center text-gray-500">
							<ul className="flex flex-nowrap -mb-px whitespace-nowrap overflow-x-auto">
								<li className="mr-4">
									<a
										href="#"
										className="inline-block p-2 border-b-2 hover:text-gray-600 hover:border-gray-300 border-xcrow_secondary text-xcrow_secondary font-xcrow_smb outline-none"
									>
										Contract List
									</a>
								</li>
								<li className="mr-4">
									<a
										href="#"
										className="inline-block p-2 text-gray-600 hover:text-xcrow_secondary hover:border-xcrow_secondary font-xcrow_smb hover:border-b-2 outline-none"
									>
										Active Contract
									</a>
								</li>
								<li className="mr-4">
									<a
										href="#"
										className="inline-block p-2 text-gray-600 hover:text-xcrow_secondary hover:border-xcrow_secondary font-xcrow_smb hover:border-b-2 outline-none"
									>
										Conflict Resolution
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container px-6 flex flex-col mx-auto pb-8">
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-4 pt-1">
						<div className="p-4">
							<div className="flex flex-row space-x-6 justify-between items-center">
								<div>
									<ul className="inline-flex">
										<li>
											<button className="h-10 px-5 text-gray-700  border border-r-0 border-gray-300 bg-xcrow_secondary bg-opacity-20 rounded-l-md focus:shadow-outline text-sm outline-none">
												1-10
											</button>

											<ul
												className="py-1 text-sm text-gray-700 bg-gray-50 hidden absolute"
												aria-labelledby="dropdownDefault"
											>
												<li>
													<a
														href="#"
														className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>
														1-10
													</a>
													<a
														href="#"
														className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>
														11-20
													</a>
													<a
														href="#"
														className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													>
														21-30
													</a>
												</li>
											</ul>
										</li>
										<li>
											<button className="h-10 px-5 text-gray-700 border border-gray-300 rounded-r-md focus:shadow-outline bg-gray-50 text-sm outline-none">
												Records per page
											</button>
										</li>
									</ul>
								</div>
								<div>
									<label htmlFor="table-search" className="sr-only">
										Search
									</label>
									<div className="relative mt-1">
										<div className="absolute inset-y-0 left-0 flex items-center px-3 rounded-md pointer-events-none bg-xcrow_secondary bg-opacity-20 text-gray-700">
											<svg
												className="w-5 h-5 text-gray-500"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
													clip-rule="evenodd"
												></path>
											</svg>
										</div>
										<input
											type="text"
											id="table-search"
											className="bg-gray-50 border text-gray-700 border-gray-300 text-sm rounded-md block w-80 pl-14 h-10 outline-none"
											placeholder="Search by depositor's email"
										/>
									</div>
								</div>
							</div>
						</div>
						<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
							<thead className="text-xs text-gray-700 uppercase font-xcrow_smb bg-xcrow_secondary bg-opacity-20">
								<tr>
									<th scope="col" className="px-6 py-3">
										S/N
									</th>
									<th scope="col" className="px-6 py-3">
										Contract Creator
									</th>
									<th scope="col" className="px-6 py-3">
										Blockchain Network
									</th>
									<th scope="col" className="px-6 py-3">
										Project Value
									</th>
									<th scope="col" className="px-6 py-3">
										Project Title
									</th>
									<th scope="col" className="px-6 py-3">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="bg-white border-b text-sm font-xcrow_rg hover:bg-gray-50 dark:hover:bg-gray-600">
									<td className="px-6 py-4">001</td>
									<td className="px-6 py-4">ghostworkspace@gmail.com</td>
									<td className="px-6 py-4">Celo</td>
									<td className="px-6 py-4">$1000 cUSD</td>
									<td className="px-6 py-4">Build a house</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<a
											href="#"
											className="font-semibold text-xcrow_secondary hover:underline outline-none"
										>
											View Details
										</a>
									</td>
								</tr>
								<tr className="bg-white border-b text-sm font-xcrow_rg hover:bg-gray-50 dark:hover:bg-gray-600">
									<td className="px-6 py-4">002</td>
									<td className="px-6 py-4">ghostworkspace@gmail.com</td>
									<td className="px-6 py-4">Celo</td>
									<td className="px-6 py-4">$1000 cUSD</td>
									<td className="px-6 py-4">Build a house</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<a
											href="#"
											className="font-semibold text-xcrow_secondary hover:underline outline-none"
										>
											View Details
										</a>
									</td>
								</tr>
								<tr className="bg-white border-b text-sm font-xcrow_rg hover:bg-gray-50 dark:hover:bg-gray-600">
									<td className="px-6 py-4">003</td>
									<td className="px-6 py-4">ghostworkspace@gmail.com</td>
									<td className="px-6 py-4">Celo</td>
									<td className="px-6 py-4">$3400 cUSD</td>
									<td className="px-6 py-4">consectetur a house</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<a
											href="#"
											className="font-semibold text-xcrow_secondary hover:underline outline-none"
										>
											View Details
										</a>
									</td>
								</tr>
								<tr className="bg-white border-b text-sm font-xcrow_rg hover:bg-gray-50 dark:hover:bg-gray-600">
									<td className="px-6 py-4">004</td>
									<td className="px-6 py-4">ghostworkspace@gmail.com</td>
									<td className="px-6 py-4">Celo</td>
									<td className="px-6 py-4">$9000 cUSD</td>
									<td className="px-6 py-4">Build a house</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<a
											href="#"
											className="font-semibold text-xcrow_secondary hover:underline outline-none"
										>
											View Details
										</a>
									</td>
								</tr>
								<tr className="bg-white border-b text-sm font-xcrow_rg hover:bg-gray-50 dark:hover:bg-gray-600">
									<td className="px-6 py-4">005</td>
									<td className="px-6 py-4">ghostworkspace@gmail.com</td>
									<td className="px-6 py-4">Celo</td>
									<td className="px-6 py-4">$3000 cUSD</td>
									<td className="px-6 py-4">Build a house</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<a
											href="#"
											className="font-semibold text-xcrow_secondary hover:underline outline-none"
										>
											View Details
										</a>
									</td>
								</tr>
								<tr className="bg-white border-b text-sm font-xcrow_rg hover:bg-gray-50 dark:hover:bg-gray-600">
									<td className="px-6 py-4">006</td>
									<td className="px-6 py-4">ghostworkspace@gmail.com</td>
									<td className="px-6 py-4">Celo</td>
									<td className="px-6 py-4">$3000 cUSD</td>
									<td className="px-6 py-4">Build a house</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<a
											href="#"
											className="font-semibold text-xcrow_secondary hover:underline outline-none"
										>
											View Details
										</a>
									</td>
								</tr>
								<tr className="bg-white border-b text-sm font-xcrow_rg hover:bg-gray-50 dark:hover:bg-gray-600">
									<td className="px-6 py-4">007</td>
									<td className="px-6 py-4">ghostworkspace@gmail.com</td>
									<td className="px-6 py-4">Celo</td>
									<td className="px-6 py-4">$3000 cUSD</td>
									<td className="px-6 py-4">Build a house</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<a
											href="#"
											className="font-semibold text-xcrow_secondary hover:underline outline-none"
										>
											View Details
										</a>
									</td>
								</tr>
								<tr className="bg-white border-b text-sm font-xcrow_rg hover:bg-gray-50 dark:hover:bg-gray-600">
									<td className="px-6 py-4">008</td>
									<td className="px-6 py-4">ghostworkspace@gmail.com</td>
									<td className="px-6 py-4">Celo</td>
									<td className="px-6 py-4">$3000 cUSD</td>
									<td className="px-6 py-4">Build a house</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<a
											href="#"
											className="font-semibold text-xcrow_secondary hover:underline outline-none"
										>
											View Details
										</a>
									</td>
								</tr>
								<tr className="bg-white border-b text-sm font-xcrow_rg hover:bg-gray-50 dark:hover:bg-gray-600">
									<td className="px-6 py-4">009</td>
									<td className="px-6 py-4">ghostworkspace@gmail.com</td>
									<td className="px-6 py-4">Celo</td>
									<td className="px-6 py-4">$3000 cUSD</td>
									<td className="px-6 py-4">Build a house</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<a
											href="#"
											className="font-semibold text-xcrow_secondary hover:underline outline-none"
										>
											View Details
										</a>
									</td>
								</tr>
								<tr className="bg-white border-b text-sm font-xcrow_rg hover:bg-gray-50 dark:hover:bg-gray-600">
									<td className="px-6 py-4">010</td>
									<td className="px-6 py-4">ghostworkspace@gmail.com</td>
									<td className="px-6 py-4">Celo</td>
									<td className="px-6 py-4">$3000 cUSD</td>
									<td className="px-6 py-4">Build a house</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<a
											href="#"
											className="font-semibold text-xcrow_secondary hover:underline outline-none"
										>
											View Details
										</a>
									</td>
								</tr>
							</tbody>
						</table>
						<div className="flex justify-center">
							<ul className="inline-flex -space-x-px relative py-6">
								<li>
									<a
										href="#"
										className="py-2 px-2 ml-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 outline-none"
									>
										<i className="bx bx-left-arrow-alt"></i> Previous
									</a>
								</li>
								<li>
									<a
										href="#"
										className="py-2 px-2 leading-tigh bg-xcrow_secondary bg-opacity-50 text-white hover:bg-gray-100 hover:text-gray-700 outline-none"
									>
										1
									</a>
								</li>
								<li>
									<a
										href="#"
										className="py-2 px-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 outline-none"
									>
										2
									</a>
								</li>
								<li>
									<a
										href="#"
										className="py-2 px-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 outline-none"
									>
										3
									</a>
								</li>
								<li>
									<a
										href="#"
										className="py-2 px-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 outline-none"
									>
										4
									</a>
								</li>
								<li>
									<a
										href="#"
										className="py-2 px-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 outline-none"
									>
										5
									</a>
								</li>
								<li>
									<a
										href="#"
										className="py-2 px-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 outline-none"
									>
										Next <i className="bx bx-right-arrow-alt"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
