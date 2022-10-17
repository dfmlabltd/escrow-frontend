import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container mx-auto px-6 pt-12 flex flex-col">
        <div className="flex flex-col justify-between md:flex-row border-b-2 border-gray-100 pb-16">
          <div className="space-y-5 md:w-4/12">
            <h1 className="text-2xl font-xcrow_bold text-gray-800 text-black">
              adehun
            </h1>
            <h3 className="text-3xl font-xcrow_rg font-semibold text-black">
              Our insight to your inbox.
            </h3>
            <form action="">
              <div className="flex flex-row">
                <input
                  className="appearance-none border rounded-xl w-full py-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Your email address"
                />
                <button className="-ml-6 rounded-xl bg-xcrow_secondary text-white py-5 px-7"></button>
              </div>
            </form>
          </div>
          <div className="md:w-6/12">
            <div className="flex flex-col justify-between space-y-10 mt-10 md:flex-row md:space-y-0 md:mt-0">
              <div className="flex flex-col space-y-6">
                <h3 className="text-xl font-xcrow_rg text-black font-semibold">
                  Features
                </h3>
                <ul className="space-y-4 text-base text-gray-700">
                  <li>Contract</li>
                  <li>Payment</li>
                  <li>Resolution Center</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-6">
                <h3 className="text-xl font-xcrow_rg text-black font-semibold">
                  Company
                </h3>
                <ul className="space-y-4 text-base text-gray-700">
                  <li>Blog</li>
                  <li>Career</li>
                  <li>About Us</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-6">
                <h3 className="text-xl font-xcrow_rg text-black font-semibold">
                  Help
                </h3>
                <ul className="space-y-4 text-base text-gray-700">
                  <li>FAQs</li>
                  <li>Contact Us</li>
                  <li>Terms Of Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-4 py-7 md:flex-row font-xcrow_rg md:space-y-0">
          <div>
            <h5 className="text-sm">2022@adehun</h5>
          </div>
          <div>
            <h5 className="text-sm">
              Developed by{" "}
              <span className="text-xcrow_default font-xcrow_bold tracking-wider">
                DFMlab
              </span>
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
