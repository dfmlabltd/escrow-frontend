import React, { useState, Fragment } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { observer } from "mobx-react-lite";
import { useStoreContext } from "./_app";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useLoginHooks } from "../components/login/login-hooks";
import { useRouter } from "next/router";
import Backarrow from "../components/back-arrow";
import Modal from "react-modal";
import Web3 from "web3";
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function ContractReview() {
  const [isOpen, setIsOpen] = useState(false);
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  const {
    ContractsStore: { contractInfo, token, user, DepositorCheck, handleAuth },
  } = useStoreContext();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const { handleTokenRefresh } = useLoginHooks();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (DepositorCheck === "depositor" && user.wallet === "") {
      openModal();
      setLoading(false);
    } else {
      try {
        handleTokenRefresh().then(async (tok: any) => {
          const res: any = await fetch(
            `${process.env.BASE_URL}/contract/`,

            {
              body: JSON.stringify({
                token: contractInfo?.token.id,
                trustees: contractInfo.trustees,
                amount: contractInfo.amount,
                wait_day: contractInfo.wait_day,
                auto_withdrawal: contractInfo.auto_withdrawal,
                title: contractInfo.title,
                agreement_contract: contractInfo.agreement_contract,
                depositors:
                  DepositorCheck === "others"
                    ? contractInfo?.depositors
                    : DepositorCheck === "depositor"
                    ? [
                        {
                          user: user.email,
                          wallet_address: user.wallet,
                          amount: contractInfo.amount,
                        },
                      ]
                    : [],
              }),
              method: "POST",
              headers: {
                Authorization: `Bearer ${tok.access}`,
                "Content-Type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then((res) => {
              window.location.assign("/contract_summary");
              setLoading(false);
            })
            .catch(() => setLoading(false));
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  async function closeModal() {
    if (web3.utils.isAddress(wallet) === false) {
      setError("Invalid Address");
    } else {
      try {
        handleTokenRefresh().then(async (tok: any) => {
          const res: any = await fetch(
            `${process.env.BASE_URL}/user/profile/`,
            {
              method: "PATCH",
              body: JSON.stringify({
                wallet: wallet,
              }),
              headers: {
                Authorization: `Bearer ${
                  tok?.access ? tok.access : token.access_token
                }`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then((res) => handleAuth(res));

          setIsOpen(false);
        });
      } catch (error) {}
    }
  }
  return (
    <div>
      <section id="xcrow_contractDetails">
        <div className="w-full min-h-screen contract_bg">
          <Backarrow />
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <p
              style={{ fontSize: "14px", fontWeight: 700, marginBottom: "5px" }}
            >
              {" "}
              Please Input your wallet address
            </p>
            <div className="">
              <input
                type="text"
                value={wallet}
                id="contractamount"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setWallet(e.target.value);
                }}
                placeholder="Enter amount"
                className="px-5 py-2 h-14 border  w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline  text-base pr-32"
              />
              {error !== "" && (
                <>
                  <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
                </>
              )}
            </div>
            <div
              className="mt-4 flex "
              style={{ justifyContent: "space-between" }}
            >
              <button
                onClick={() => {
                  setError("");
                  setIsOpen(false);
                }}
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Close
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={closeModal}
              >
                Proceed
              </button>
            </div>
          </Modal>

          <div className="container px-6 flex flex-col mx-auto pb-24">
            <div className="max-w-md flex flex-col space-y-12 mx-auto mt-10">
              <div className="flex justify-center">
                <img
                  src="/assets/Logo/Group 37467.svg"
                  alt="logo"
                  className="w-10 h-10 object-cover"
                />
              </div>
              <div className="space-y-5 t ext-left md:text-center">
                <h3 className="text-4xl md:text-5xl font-xcrow_smb text-white capitalize">
                  Contract Review
                </h3>
                <p className="text-md text-white">
                  A contract review is a professional procedure for identifying
                  and analyzing important clauses of a contract.
                </p>
              </div>
            </div>
            <div className="w-full md:flex md:justify-center">
              <div className="flex flex-col justify-center space-y-6 mt-8 md:max-w-2xl md:flex-1">
                <div className="bg-gray-900 flex flex-1 flex-col">
                  <div className="md:m-4">
                    <div className="flex justify-center px-4 py-4">
                      <div className="flex flex-col w-full border rounded-xl border-blue-200 border-dashed hover:bg-gray-800 hover:border-gray-300 px-6 pb-8 pt-3 space-y-2">
                        <div className="border-b border-gray-600 py-5 space-y-3 overflow-hidden">
                          <div className="text-xcrow_secondary">
                            <h5 className="font-xcrow_smb text-sm">
                              Create A Contract
                            </h5>
                          </div>
                          <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                            <div className="flex flex-col">
                              <h5>Set an amount</h5>
                            </div>
                            <div className="flex flex-col">
                              <span>
                                {contractInfo.coin.name} &nbsp;
                                {contractInfo.amount}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="border-b border-gray-600 py-5 space-y-3 overflow-hidden">
                          <div className="text-xcrow_secondary">
                            <h5 className="font-xcrow_smb text-sm">
                              Select A Blockchain
                            </h5>
                          </div>
                          <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                            <div className="flex flex-col">
                              <h5>Cryptocurrency</h5>
                            </div>
                            <div className="flex flex-col">
                              <span>{contractInfo.token.name}</span>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                            <div className="flex flex-col">
                              <h5>Token</h5>
                            </div>
                            <div className="flex flex-col">
                              <span>{contractInfo.coin.name}</span>
                            </div>
                          </div>
                        </div>

                        <div className="border-b border-gray-600 py-5 space-y-3 overflow-hidden">
                          <div className="text-xcrow_secondary">
                            <h5 className="font-xcrow_smb text-sm">
                              Depositor Requirement
                            </h5>
                          </div>
                          {DepositorCheck === "others" ? (
                            <>
                              {contractInfo?.depositors.map(
                                (item: any, index: any) => (
                                  <>
                                    <div className="text-white">
                                      <h5 className="font-xcrow_smb text-sm">
                                        Milestone {index + 1}
                                      </h5>
                                    </div>
                                    <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                                      <div className="flex flex-col">
                                        <h5>Amount</h5>
                                      </div>
                                      <div className="flex flex-col">
                                        <span>${item.amount}</span>
                                      </div>
                                    </div>
                                    <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                                      <div className="flex flex-col">
                                        <h5>Wallet Address</h5>
                                      </div>
                                      <div className="flex flex-col">
                                        <span>{item.wallet_address}</span>
                                      </div>
                                    </div>
                                    <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                                      <div className="flex flex-col">
                                        <h5>Email</h5>
                                      </div>
                                      <div className="flex flex-col">
                                        <span>{item.email}</span>
                                      </div>
                                    </div>
                                  </>
                                )
                              )}
                            </>
                          ) : DepositorCheck === "anyone" ? (
                            <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                              Anyone can Deposit
                            </div>
                          ) : (
                            <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                              I'm the depositor
                            </div>
                          )}
                        </div>

                        <div className="border-b border-gray-600 py-5 space-y-3 overflow-hidden">
                          <div className="text-xcrow_secondary">
                            <h5 className="font-xcrow_smb text-sm">
                              Trustee Requirement
                            </h5>
                          </div>
                          {contractInfo?.trustees.map(
                            (item: any, index: any) => (
                              <>
                                <div className="text-white">
                                  <h5 className="font-xcrow_smb text-sm">
                                    Milestone {index + 1}
                                  </h5>
                                </div>
                                <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                                  <div className="flex flex-col">
                                    <h5>Amount</h5>
                                  </div>
                                  <div className="flex flex-col">
                                    <span>${item.amount}</span>
                                  </div>
                                </div>
                                <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                                  <div className="flex flex-col">
                                    <h5>Wallet Address</h5>
                                  </div>
                                  <div className="flex flex-col">
                                    <span>{item.wallet_address}</span>
                                  </div>
                                </div>
                                <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                                  <div className="flex flex-col">
                                    <h5>Email</h5>
                                  </div>
                                  <div className="flex flex-col">
                                    <span>{item.email}</span>
                                  </div>
                                </div>
                              </>
                            )
                          )}
                        </div>

                        <div className="border-b border-gray-600 py-5 space-y-3 overflow-hidden">
                          <div className="text-xcrow_secondary">
                            <h5 className="font-xcrow_smb text-sm">
                              Contract Details
                            </h5>
                          </div>
                          <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                            <div className="flex flex-col">
                              <h5>Contract Title</h5>
                            </div>
                            <div className="flex flex-col">
                              <span>{contractInfo.title}</span>
                            </div>
                          </div>

                          <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                            <div className="flex flex-col">
                              <h5>Automatic Withdraw</h5>
                            </div>
                            <div className="flex flex-col">
                              <span>
                                {contractInfo.auto_withdrawal === true
                                  ? "Active"
                                  : "Inactive"}
                              </span>
                            </div>
                          </div>
                        </div>
                        {contractInfo?.agreement_contract !== "" && (
                          <div className="border-b border-gray-600 py-5 space-y-3 overflow-hidden">
                            <div className="text-xcrow_secondary">
                              <h5 className="font-xcrow_smb text-sm">
                                Agreement File
                              </h5>
                            </div>
                            <div className="flex flex-col justify-between text-gray-400 text-sm md:flex-row md:space-y-2 md:space-x-4">
                              <div className="flex flex-col">
                                <h5>upload</h5>
                              </div>
                              <div className="flex flex-col">
                                <span>{contractInfo?.agreement_contract}</span>
                                <p>{contractInfo?.agreement_contract}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="relative flex flex-col pt-8">
                          <button
                            onClick={handleSubmit}
                            className="uppercase bg-xcrow_secondary w-full px-4 py-4 rounded-xl text-white text-base"
                          >
                            {loading ? <ScaleLoader /> : "Send Contract"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default observer(ContractReview);
