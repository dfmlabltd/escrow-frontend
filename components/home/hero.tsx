import React from "react";

export default function Hero() {
  return (
    <section
      id="header_section"
      className="h-auto bg-gradient-to-r from-xcrow_default via-xcrow_primary to-xcrow_default md:min-h-screen"
    >
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
      <div id="hero">
        <div className="container mx-auto px-6 flex flex-col py-24 space-y-6 items-center justify-between md:flex-row md:space-y-0">
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
              <button className="px-16 text-white text-sm py-4 bg-xcrow_secondary rounded">
                Create Contract
              </button>
              <button className="px-16 text-white text-sm py-4 border rounded">
                Log In
              </button>
            </div>
          </div>

          <div className="w-1/3"></div>
        </div>
      </div>
    </section>
  );
}
