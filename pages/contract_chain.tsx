import React, { useState } from "react";
import { useContractHook } from "../components/contract/contract-hook";
import { observer } from "mobx-react-lite";
import { useStoreContext } from "./_app";
import { useRouter } from "next/router";
import isNumeric from "validator/lib/isNumeric";
import { toast } from "react-toastify";
import Notification from "../components/notification";
import Backarrow from "../components/back-arrow";
const Contract = () => {
  const {
    ContractsStore: { handleChange, contractInfo, user },
  } = useStoreContext();
  const { amount, token, coin } = contractInfo;
  const { tokens, handleFetchCoins, coins } = useContractHook();
  const [tokenValue, setTokenValue] = useState<any>(
    Object.keys(token).length === 0 ? {} : token
  );
  const [coinValue, setCoinValue] = useState<any>(
    Object.keys(coin).length === 0 ? {} : coin
  );
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [openCoins, setOpenCoins] = useState(false);
  const handleNext = (e: any, amount: string) => {
    e.preventDefault();
    if (!isNumeric(amount)) {
      setError("Please put in a valid amount");
      toast("Please put in a valid amount");
    } else {
      router.push("/trusteeRequirement");
    }
  };
  return (
    <section id="xcrow_contract">
      <div className="w-full min-h-screen contract_bg">
        <Backarrow />

        <div className="container px-6 flex flex-col mx-auto pb-24">
          <div className="max-w-md flex flex-col space-y-12 mx-auto mt-10">
            <div className="flex justify-center">
              <img
                src="/assets/Logo/Group 37467.svg"
                alt="logo"
                className="w-10 h-10 object-cover"
              />
            </div>
            <div className="space-y-5 text-left md:text-center">
              <h3 className="text-4xl md:text-5xl font-xcrow_smb text-white capitalize">
                Select a Blockchain
              </h3>
              <p className="text-md text-white">
                In order to receive payment in cryptocurrency, you will have to
                select and connect a digital wallet on special exchange
              </p>
            </div>
            {error !== "" && <Notification kind="error" message={error} />}
            <form action="">
              <div className="w-full flex flex-col space-y-10">
                <div className="relative form-input">
                  <label
                    htmlFor="cryptocurrency"
                    className="text-white text-md"
                  >
                    Set Cryptocurrency
                  </label>
                  <div className="relative mt-2">
                    <div className="w-full">
                      <input
                        type="text"
                        id="cryptocurrency"
                        value={
                          tokenValue?.name === undefined
                            ? tokens !== undefined && tokens[0]?.name
                            : tokenValue?.name
                        }
                        placeholder="CELO (Alfajores Testnet)"
                        className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
                      />
                    </div>
                    <div className="absolute top-0 right-0">
                      <div className="inline-block relative place-content-center ">
                        <div
                          onClick={() => setOpen(!open)}
                          style={{ marginRight: "4px" }}
                          className="block appearance-none h-12 mt-1 bg-xcrow_secondary border border-xcrow_secondary px-5 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline text-white text-base"
                        >
                          {" "}
                          {tokenValue?.icon ? (
                            <>
                              <svg
                                style={{ display: "none" }}
                                fill={""}
                                width={"0px"}
                                height={"0px"}
                              >
                                <use xlinkHref={`${tokenValue?.icon}`} />
                              </svg>
                              <img
                                src={tokenValue?.icon}
                                width="30px"
                                style={{
                                  borderRadius: "50px",
                                }}
                              />
                            </>
                          ) : (
                            <>
                              <svg
                                style={{ display: "none" }}
                                fill={""}
                                width={"0px"}
                                height={"0px"}
                              >
                                <use xlinkHref={`${tokens[0]?.icon}`} />
                              </svg>
                              <img
                                src={tokens[0]?.icon}
                                width="30px"
                                style={{
                                  borderRadius: "50px",
                                }}
                              />
                            </>
                          )}
                        </div>
                        {open && (
                          <div
                            style={{
                              position: "absolute",
                              background: "black",
                              right: "10px",
                              padding: "5px 20px",
                              marginTop: "10px",
                              zIndex: 5,
                              borderRadius: "8px",
                              color: "white",
                            }}
                          >
                            {tokens?.map((token: any) => (
                              <p
                                onClick={() => {
                                  setTokenValue(token);
                                  handleChange("token", token);
                                  handleFetchCoins(token.id);
                                  setOpen(false);
                                }}
                                style={{
                                  whiteSpace: "nowrap",
                                  borderTop: "1px solid white",
                                  cursor: "pointer",
                                }}
                              >
                                {token.name}
                              </p>
                            ))}
                          </div>
                        )}
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
                <div className="relative">
                  <label htmlFor="tokenName" className="text-white text-md">
                    Set token name
                  </label>
                  <div className="relative mt-2">
                    <div className="w-full">
                      <input
                        type="text"
                        id="tokenName"
                        value={
                          coinValue?.name === undefined
                            ? coins !== undefined
                              ? coins[0]?.name
                              : "cUSD"
                            : coinValue?.name
                        }
                        placeholder="Search token name"
                        className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
                      />
                    </div>
                    <div className="absolute top-0 right-0">
                      <div className="inline-block relative place-content-center ">
                        <div
                          onClick={() => setOpenCoins(!openCoins)}
                          style={{
                            marginRight: "4px",
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="block appearance-none h-12 mt-1  w-16 bg-xcrow_secondary border border-xcrow_secondary px-5 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-white text-base"
                        >
                          {coinValue?.icon ? (
                            <>
                              <svg
                                style={{ display: "none" }}
                                fill={""}
                                width={"0px"}
                                height={"0px"}
                              >
                                <use xlinkHref={`${coinValue?.icon}`} />
                              </svg>
                              <img
                                src={coinValue?.icon}
                                width="30px"
                                style={{
                                  borderRadius: "50px",
                                }}
                              />
                            </>
                          ) : (
                            <>
                              <svg
                                style={{ display: "none" }}
                                fill={""}
                                width={"0px"}
                                height={"0px"}
                              >
                                <use
                                  xlinkHref={`${
                                    coins !== undefined && coins[0]?.icon
                                  }`}
                                />
                              </svg>
                              <img
                                src={
                                  coinValue?.icon === undefined
                                    ? coins !== undefined && coins[0]?.icon
                                    : coinValue?.icon
                                }
                                width="30px"
                                style={{
                                  borderRadius: "50px",
                                }}
                              />
                            </>
                          )}
                        </div>
                        {openCoins && (
                          <div
                            style={{
                              position: "absolute",
                              background: "black",
                              right: "10px",
                              padding: "5px 30px",
                              marginTop: "10px",
                              zIndex: 5,
                              borderRadius: "8px",
                              color: "white",
                            }}
                          >
                            {coins?.map((token: any) => (
                              <p
                                onClick={() => {
                                  setCoinValue(token);
                                  handleChange("coin", token);
                                  setOpenCoins(false);
                                }}
                                style={{
                                  whiteSpace: "nowrap",
                                  borderTop: "1px solid white",
                                  padding: "5px",
                                  cursor: "pointer",
                                }}
                              >
                                {token.name}
                              </p>
                            ))}
                          </div>
                        )}
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
                <div className="w-full flex flex-col space-y-10">
                  <div className="relative form-input">
                    <label
                      htmlFor="contractamount"
                      className="text-white text-md"
                    >
                      Set an amount
                    </label>
                    <div className="relative mt-2">
                      <div className="w-full">
                        <input
                          type="number"
                          value={contractInfo.amount}
                          id="contractamount"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            handleChange("amount", e.target.value);
                          }}
                          placeholder="Enter amount"
                          className="px-5 py-2 h-14 border w-full bg-transparent border-gray-400 rounded-lg focus:outline-none focus:shadow-outline text-white text-base pr-32"
                        />
                      </div>
                      <div className="absolute top-0 right-0">
                        <div
                          className="inline-block relative place-content-center"
                          style={{ marginRight: "4px" }}
                        >
                          <select className="block appearance-none h-12 mt-1 bg-xcrow_secondary border border-xcrow_secondary px-5 py-3 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-white text-base">
                            <option>
                              {coin !== undefined ? coin?.name : ""}
                            </option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>YEN</option>
                            <option>NGN</option>
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
                </div>
                <div className="relative flex flex-col pt-8">
                  <button
                    onClick={(e: any) => handleNext(e, contractInfo.amount)}
                    className="uppercase bg-xcrow_secondary w-full px-4 py-4 rounded-xl text-white text-base"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default observer(Contract);
