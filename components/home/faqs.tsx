import React, { useState } from "react";

export default function Faqs() {
	const question = [
		{
			question: "What to do if i cant't make a transaction with my wallet",
			answer:
				"	Lorem ipsum dolor sit amet consectetur adipisicing elit. 	mollitia, sequi reiciendis iure libero quis voluptatem			expedita, nihil modi doloribus nemo distinctio quaerat beatae veniam possimus cumque alias sunt architecto.",
		},
		{
			question: "  What to do if i cant't make a transaction with my wallet",
			answer:
				"	Lorem ipsum dolor sit amet consectetur adipisicing elit. 	mollitia, sequi reiciendis iure libero quis voluptatem			expedita, nihil modi doloribus nemo distinctio quaerat beatae veniam possimus cumque alias sunt architecto.",
		},
		{
			question: " What to do if i cant't make a transaction with my wallet",
			answer:
				"	Lorem ipsum dolor sit amet consectetur adipisicing elit. 	mollitia, sequi reiciendis iure libero quis voluptatem			expedita, nihil modi doloribus nemo distinctio quaerat beatae veniam possimus cumque alias sunt architecto.",
		},
	];
	return (
		<section id="faqs">
			<div className="container mx-auto px-6 py-12 flex flex-col">
				<div className="flex flex-col justify-center mx-auto text-center">
					<h2 className="text-4xl font-xcrow_rg capitalize max-w-2xl md:text-5xl">
						frequently Asked Questions
					</h2>
				</div>
				{question.map((item: any) => (
					<Question item={item} />
				))}
				{/* <div className="py-10">
					<dl className="mt-8 mx-auto max-w-screen-md flex flex-col space-y-5 lg:flex-row lg:flex-wrap"> */}
				{/* <div className="w-full">
							<div className="question-and-answer select-none cursor-pointer border-2 border-gray-100 px-6 py-6 rounded-lg text-sm group md:px-10">
								<dt className="question">
									<div className="flex justify-between items-start space-x-6">
										<div className="text-gray-800 font-semibold">
											<h4 className="text-xl"></h4>
										</div>
										<div className="faq_line">
											<span className="faq_line1"></span>
											<span className="faq_line2"></span>
										</div>
									</div>
								</dt>
								<dd className="answer hidden mt-4 leading-7 max-w-xl text-gray-700">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
									mollitia, sequi reiciendis iure libero quis voluptatem
									expedita, nihil modi doloribus nemo distinctio quaerat beatae
									veniam possimus cumque alias sunt architecto.
								</dd>
							</div>
						</div> */}

				{/* <div className="w-full">
							<div className="question-and-answer select-none cursor-pointer border-2 border-gray-100 px-6 py-6 rounded-lg text-sm group md:px-10">
								<dt className="question">
									<div className="flex justify-between items-start space-x-6">
										<div className="text-gray-800 font-semibold">
											<h4 className="text-xl">
												What to do if i cant't make a transaction with my wallet
											</h4>
										</div>
										<div className="faq_line">
											<span className="faq_line1"></span>
											<span className="faq_line2"></span>
										</div>
									</div>
								</dt>
								<dd className="answer mt-4 leading-7 max-w-xl text-gray-700">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
									mollitia, sequi reiciendis iure libero quis voluptatem
									expedita, nihil modi doloribus nemo distinctio quaerat beatae
									veniam possimus cumque alias sunt architecto.
								</dd>
							</div>
						</div> */}

				{/* <div className="w-full">
							<div className="question-and-answer select-none cursor-pointer border-2 border-gray-100 px-6 py-6 rounded-lg text-sm group md:px-10">
								<dt className="question">
									<div className="flex justify-between items-start space-x-6">
										<div className="text-gray-800 font-semibold">
											<h4 className="text-xl">
												What to do if i cant't make a transaction with my wallet
											</h4>
										</div>
										<div className="faq_line">
											<span className="faq_line1"></span>
											<span className="faq_line2"></span>
										</div>
									</div>
								</dt>
								<dd className="answer hidden mt-4 leading-7 max-w-xl text-gray-700">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
									mollitia, sequi reiciendis iure libero quis voluptatem
									expedita, nihil modi doloribus nemo distinctio quaerat beatae
									veniam possimus cumque alias sunt architecto.
								</dd>
							</div>
						</div> */}
				{/* </dl>
				</div> */}
			</div>
		</section>
	);
}

const Question = ({ item }: any) => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<div className="">
				<dl className="mt-8 mx-auto max-w-screen-md flex flex-col space-y-5 lg:flex-row lg:flex-wrap">
					<div className="w-full">
						<div className="question-and-answer select-none cursor-pointer border-2 border-gray-100 px-6 py-6 rounded-lg text-sm group md:px-10">
							<dt className="question" onClick={() => setOpen(!open)}>
								<div className="flex justify-between items-start space-x-6">
									<div className="text-gray-800 font-semibold">
										<h4 className="text-xl">{item.question}</h4>
									</div>
									<div
										className="faq_line"
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											marginTop: "10px",
										}}
									>
										<span className="faq_line1"></span>
										<span className="faq_line2"></span>
									</div>
								</div>
							</dt>
							{open && (
								<dd className="answer mt-4 leading-7 max-w-xl text-gray-700">
									{item.answer}
								</dd>
							)}
						</div>
					</div>
				</dl>
			</div>
		</div>
	);
};
