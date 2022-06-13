import React from "react";

export default function CustomerReview() {
  return (
    <section id="customersReview">
      <div className="container mx-auto px-6 py-12 flex flex-col">
        <div className="flex flex-col justify-center mx-auto text-center">
          <h2 className="text-4xl font-xcrow_rg capitalize max-w-xl md:text-5xl">
            see what our customer are saying about us
          </h2>
        </div>

        <div className="flex flex-col justify-between items-center py-12 md:flex-row md:space-x-16">
          <div className="py-8 px-6 border-2 rounded hover:border-0 hover:bg-white hover:shadow-xl border-gray-100 md:w-1/2 md:space-y-10 md:px-10">
            <p className="text-sm leading-7 w-11/12">
              "We have been waiting on this produot and now that we have
              installed a few, We think it wil make the industry by storm"
            </p>
            <div className="flex flex-col space-y-2">
              <span className="text-lg text-xcrow_secondary font-xcrow_smb">
                J.Godspower
              </span>
              <span className="text-sm">Software Engineer</span>
            </div>
          </div>

          <div className="py-8 px-6 border-2 border-white rounded bg-white shadow-2xl md:w-1/2 md:space-y-10 hover:shadow-xl md:px-10">
            <p className="text-sm leading-7 w-11/12">
              "We have been waiting on this product and now that we have
              installed a few, We think it will make the industry by stonm." "We
              have been walting on this product and now that we have installed a
              few. We think it will make the Industry by storm"
            </p>
            <div className="flex flex-col space-y-2">
              <span className="text-lg font-xcrow_smb">J.Godspower</span>
              <span className="text-sm">Software Engineer</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4 justify-center mt-2">
          <span className="review_counter"></span>
          <span className="review_counter"></span>
          <span className="review_counter review_active"></span>
          <span className="review_counter"></span>
        </div>
      </div>
    </section>
  );
}
