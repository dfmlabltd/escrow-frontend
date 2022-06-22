import React, { useState, useEffect } from "react";
import Backarrow from "../components/back-arrow";
import Notification from "../components/notification";
import { useRouter } from "next/router";
import isNumeric from "validator/lib/isNumeric";
import { MdCancel } from "react-icons/md";
import isEmail from "validator/lib/isEmail";
import { useStoreContext } from "./_app";
import Web3 from "web3";

import { useTrusteesHook } from "../components/trustees/trustees";
import { observer } from "mobx-react";
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

function Example({ check, setCheck }: any) {
  return (
    <div className="w-full px-4 ">
      <div
        className="mx-auto w-full  "
        style={{ display: "flex", marginTop: "10px" }}
      >
        <div className="d-flex flex">
          <div className="d-flex flex">
            <div
              className="form-check"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="radio"
                name="flexRadioDefault"
                checked={check === "depositor"}
                onChange={(e: any) => setCheck("depositor")}
                id="flexRadioDefault1"
              />
              <label
                className="form-check-label inline-block text-white px-3"
                htmlFor="flexRadioDefault1"
              >
                I'm the depositor
              </label>
            </div>
            <div
              className="form-check"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="radio"
                name="flexRadioDefault"
                checked={check === "others"}
                onChange={(e: any) => setCheck("others")}
                id="flexRadioDefault2"
              />
              <label
                className="form-check-label inline-block text-white px-3"
                htmlFor="flexRadioDefault2"
              >
                Other People
              </label>
            </div>
            <div
              className="form-check"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked={check === "anyone"}
                onChange={(e: any) => setCheck("anyone")}
              />
              <label
                className="form-check-label inline-block text-white px-3"
                htmlFor="flexRadioDefault2"
              >
                Anyone can deposit
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DepositorRequirement() {
  const [value, setValue] = useState<any>();
  const [check, setCheck] = useState("depositor");
  const [error, setError] = useState("");
  const {
    ContractsStore: {
      contractInfo: { depositors, coin, amount, trustees: trust },
      handleDepositorCheck,
      DepositorCheck,
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
  } = useTrusteesHook("depositors");
  useEffect(() => {
    if (amount.trim() === "" || trust[0].email === "") {
      router.push("/contract_chain");
    }
  }, []);
  const handleSubmit = () => {
    if (check !== "anyone") {
      router.push("/contractDetails");
    } else {
      if (depositors === undefined) {
        setError("Please fill in fields");
      } else {
        if (depositors?.length === 1) {
          if (
            depositors[0].user === undefined ||
            depositors[0].amount === undefined ||
            depositors[0].wallet_address === undefined
          ) {
            setError("Please fill in the required fields");
          } else if (!isEmail(depositors[0].user)) {
            setError("Please enter a valid email");
          } else if (!isNumeric(depositors[0].amount)) {
            setError("Please enter a valid amount");
          } else if (
            web3.utils.isAddress(depositors[0].wallet_address) === false
          ) {
            setError("Please fill in a valid address");
          } else {
            setError("");
            router.push("/contractDetails");
          }
        } else {
          const valueFilter = depositors?.filter(
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
          } else {
            router.push("/contractDetails");
          }
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
                Depositor's Requirement
              </h3>
              <p className="text-md text-white">
                Set up milestone and discuss them with your trustee, along with
                the payment terms for each
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <form action="">
              <div className="w-full flex flex-col space-y-10">
                {error !== "" && (
                  <div>
                    <Notification kind="error" message={error} />
                  </div>
                )}
                <Example
                  check={DepositorCheck}
                  setCheck={handleDepositorCheck}
                />
                {DepositorCheck === "others" && (
                  <>
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
                                      value={depositors[index].user}
                                      key={key}
                                      id={key}
                                      onChange={(e) => onChangeEmail(e, key)}
                                      placeholder="Enter Trustee's Email Address"
                                      className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="relative md:w-2/3">
                                <label
                                  htmlFor="tokenName"
                                  className="text-white text-md"
                                >
                                  Amount
                                </label>
                                <div className="relative mt-2">
                                  <div className="w-full">
                                    <input
                                      type="number"
                                      name={key}
                                      value={depositors[index].amount}
                                      key={key}
                                      id={key}
                                      onChange={(e) => onChangeAmount(e, key)}
                                      placeholder="Amount"
                                      className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
                                    />
                                  </div>
                                  <div className="absolute top-0 right-0">
                                    <div
                                      className="inline-block relative place-content-center"
                                      style={{ marginRight: "4px" }}
                                    >
                                      <select
                                        disabled
                                        className="block appearance-none h-12 mt-1 bg-xcrow_secondary border border-xcrow_secondary px-5 py-3 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-white text-base"
                                      >
                                        <option>
                                          {coin !== undefined
                                            ? coin?.name
                                            : "cUSD"}
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="relative md:w-2/3">
                                <label
                                  htmlFor="tokenName"
                                  className="text-white text-md"
                                >
                                  Wallet Address
                                </label>
                                <div className="relative mt-2">
                                  <div className="w-full">
                                    <input
                                      type="text"
                                      name={key}
                                      value={depositors[index].wallet_address}
                                      key={key}
                                      id={key}
                                      onChange={(e) => onChangeWallet(e, key)}
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
                                    onClick={() => remove(key)}
                                  >
                                    <MdCancel
                                      size={"20px"}
                                      style={{ color: "red" }}
                                    />
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </form>
                      </div>
                    ))}
                    <div className="flex flex-row space-x-3 items-center">
                      <div
                        className="bg-xcrow_default milestone_add"
                        onClick={addTrustees}
                      >
                        <span></span>
                        <span></span>
                      </div>
                      <span className="text-white text-md">Add Depositor</span>
                    </div>
                  </>
                )}
              </div>
            </form>
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
export default observer(DepositorRequirement);
