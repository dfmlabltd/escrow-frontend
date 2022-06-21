import React from "react";
import Backarrow from "../components/back-arrow";
import { useRouter } from "next/router";
import { useState } from "react";
import Notification from "../components/notification";
import { observer } from "mobx-react-lite";
import { useStoreContext } from "./_app";
import Web3 from "web3";
import { MdCancel } from "react-icons/md";
import { useTrusteesHook } from "../components/trustees/trustees";
import isNumeric from "validator/lib/isNumeric";
import isEmail from "validator/lib/isEmail";

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
function TrusteeRequirement() {
  const [error, setError] = useState("");
  const {
    ContractsStore: {
      contractInfo: { trustees: trust, coin },
    },
  } = useStoreContext();

  const router = useRouter();
  const {
    trustees,
    addTrustees,
    onChangeEmail,
    onChangeAmount,
    onChangeWallet,
    remove,
  } = useTrusteesHook("trustees");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (trust === undefined) {
      setError("Please fill in fields");
    } else {
      if (trust?.length === 1) {
        if (
          trust[0].user === undefined ||
          trust[0].amount === undefined ||
          trust[0].wallet_address === undefined
        ) {
          setError("Please fill in the required fields");
        } else if (!isEmail(trust[0]?.user)) {
          setError("Please enter a valid email");
        } else if (!isNumeric(trust[0]?.amount)) {
          setError("Please enter a valid amount");
        } else if (web3.utils.isAddress(trust[0].wallet_address) === false) {
          setError("Please fill in a valid address");
        } else {
          setError("");
          router.push("/depositorRequirement");
        }
      } else {
        const valueFilter = trust?.filter(
          (item: any) => item.user !== undefined || item.amount !== undefined
        );

        const res = valueFilter.map((item: any) => {
          if (
            item.user === undefined ||
            item.amount === undefined ||
            item.wallet_address === undefined
          ) {
            return true;
          } else if (!isEmail(item.user)) {
            return true;
          } else if (!isNumeric(item.amount)) {
            return true;
          } else if (web3.utils.isAddress(item.wallet_address) === false) {
            return true;
          }
        });
        if (res.includes(true)) {
          setError("Please fill all required fields");
        } else if (trust?.length !== 1) {
          router.push("/depositorRequirement");
        }
      }
    }
  };

  return (
    <section id="xcrow_contract">
      <div className="w-full min-h-screen contract_bg">
        <Backarrow />

        <div className="container px-6 flex flex-col mx-auto pb-24">
          <div className="max-w-md flex flex-col space-y-12 mt-10">
            <div className="flex justify-center">
              <img
                src="/assets/Logo/Group 37467.svg"
                alt="logo"
                className="w-10 h-10 object-cover"
              />
            </div>
            <div className="space-y-5 ">
              <h3 className="text-4xl md:text-5xl font-xcrow_smb text-white capitalize">
                Trustee Requirement
              </h3>
              <p className="text-md text-white">
                Set up milestone and discuss them with your trustee, along with
                the payment terms for each
              </p>
            </div>
          </div>
          {error !== "" && (
            <div>
              <Notification kind="error" message={error} />
            </div>
          )}
          {/* {alert(Array.from(trustees).length)} */}
          {Array.from(trustees).map(([key, email], index) => (
            <div className="flex flex-col pt-8" key={key}>
              {Array.from(trustees).length >= 2 && (
                <p
                  className="text-md  mb-8"
                  style={{ fontSize: "20px", color: "#cedede" }}
                >
                  Trustee {index + 1}
                </p>
              )}

              <form action="">
                <div className="w-full flex flex-col space-y-10">
                  <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                    <div className="relative md:w-1/3">
                      <label
                        htmlFor="cryptocurrency"
                        className="text-white text-md"
                      >
                        Email Address
                      </label>
                      <div className="relative mt-2">
                        <div className="w-full">
                          <input
                            type="text"
                            name={key}
                            value={trust[index]?.user}
                            key={key}
                            id={key}
                            onChange={(e) => {
                              onChangeEmail(e, key);
                            }}
                            placeholder="Enter Trustee's Email Address"
                            className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="relative md:w-2/3">
                      <label htmlFor="tokenName" className="text-white text-md">
                        Amount
                      </label>
                      <div className="relative mt-2">
                        <div className="w-full">
                          <input
                            type="number"
                            name={key}
                            value={trust[index]?.amount}
                            key={key}
                            id={key}
                            onChange={(e) => {
                              onChangeAmount(e, key);
                            }}
                            placeholder="Amount"
                            className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
                          />
                        </div>
                        <div className="absolute top-0 right-0">
                          <div
                            className="inline-block relative place-content-center"
                            style={{ marginRight: "4px" }}
                          >
                            <select className="block appearance-none mt-1 h-12 bg-xcrow_secondary border border-xcrow_secondary px-5 py-3 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-white text-base">
                              <option>
                                {coin !== undefined ? coin.name : ""}
                              </option>
                            </select>
                            <div
                              className="pointer-events-none absolute inset-y-0 flex items-center text-white"
                              style={{ right: "10px" }}
                            >
                              <svg
                                className="fill-current h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative md:w-2/3">
                      <label htmlFor="tokenName" className="text-white text-md">
                        Wallet Address
                      </label>
                      <div className="relative mt-2">
                        <div className="w-full">
                          <input
                            type="text"
                            name={key}
                            value={trust[index]?.wallet_address}
                            key={key}
                            id={key}
                            onChange={(e) => {
                              onChangeWallet(e, key);
                            }}
                            placeholder="Wallet Address"
                            className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
                          />
                        </div>
                      </div>
                    </div>
                    {index !== 0 && (
                      <div
                        className="relative"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <p
                          className="text-white text-md mt-8 cursor-pointer"
                          onClick={() => {
                            remove(key);
                          }}
                        >
                          <MdCancel style={{ color: "red" }} />
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          ))}

          <div className="flex flex-row space-x-3 items-center pt-8">
            <div
              className="bg-xcrow_default milestone_add"
              onClick={addTrustees}
            >
              <span></span>
              <span></span>
            </div>
            <span className="text-white text-md">Add Trustees</span>
          </div>
          <div className="max-w-md flex flex-col space-y-12 mt-10">
            <div className="w-full flex flex-col pt-8">
              <button
                onClick={handleSubmit}
                className="uppercase bg-xcrow_secondary w-full px-4 py-4 rounded-xl text-white text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default observer(TrusteeRequirement);
