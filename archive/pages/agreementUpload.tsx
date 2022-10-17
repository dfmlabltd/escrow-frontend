import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useStoreContext } from "./_app";
import { create } from "ipfs-http-client";
import ScaleLoader from "react-spinners/ScaleLoader";
import { AiOutlineDownload } from "react-icons/ai";
import Backarrow from "../components/back-arrow";
import { observer } from "mobx-react-lite";

const client = create({
  url: "https://ipfs.infura.io:5001/api/v0",
});

function AgreementUpload() {
  const [agreement, setAgreement] = useState<any>("");
  const [check, setCheck] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const {
    ContractsStore: {
      handleChange,
      amount,
      contractInfo: { title },
    },
  } = useStoreContext();

  const router = useRouter();
  useEffect(() => {
    if (amount?.trim() === "" || title === "") {
      router.push("/contract_chain");
    }
  }, []);
  const handleNext = async (e: any) => {
    e.preventDefault();
    setUploading(true);
    if (agreement === "") {
      router.push("contract_review");
    } else {
      try {
        const addImages = await client.add(agreement, {
          progress: (progress: any) => {
            console.log("progress");
          },
        });

        handleChange(
          "agreement_contract",
          `https://ipfs.infura.io/ipfs/${addImages.path}`
        );

        setUploading(false);
        router.push("contract_review");
      } catch {
        setError("Error uploading agreement");
      }
    }
  };
  const renderPreview = () => {
    if (agreement !== "") {
      return (
        <div className="shadowed rad-10-im mb-4 p-2">
          <div className="preview-space imh rad-5">
            <img src={URL.createObjectURL(agreement)} alt="" />
          </div>
          <p className="text-center mb-0 mt-2 text-white">Preview Image</p>
        </div>
      );
    } else {
      return (
        <div className="shadowed rad-10-im mb-4 p-2">
          <div className="preview-space imh rad-5">
            <img src="" alt="" />
          </div>
          <p className="text-center mb-0 mt-2 text-white">Preview Image</p>
        </div>
      );
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
                Upload Agreement file
              </h3>
              <p className="text-md text-white">
                Agreement file menas the final contract embodying all contract
                documents terms, condition amd obligation
              </p>
            </div>
          </div>

          <div className="flex space-x-3 pt-16">
            <label
              htmlFor="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              {/* <input
								type="checkbox"
								className="w-4 h-4 border-0 rounded-md focus:ring-0"
								onChange={(e) => setCheck(e.target.checked)}
							/> */}
            </label>
            <label htmlFor="milestone" className="text-white text-md">
              Agreement file (optionals)
            </label>
          </div>
          <div className="flex flex-col pt-4">
            <form action="">
              <div className="w-full flex flex-col space-y-6">
                <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6">
                  <div className="md:w-1/2 bg-gray-900 flex flex-col">
                    <div className="md:m-4">
                      <div className="flex justify-center max-w-full px-4 py-4">
                        <label className="flex flex-col w-full border rounded-xl border-blue-200 border-dashed hover:bg-gray-800 hover:border-gray-300">
                          <div className="flex flex-col items-center justify-center px-4 pt-7 space-y-4">
                            <p className="pt-1 text-base tracking-wider text-gray-400 group-hover:text-gray-600">
                              Drag and drop to upload your file
                            </p>
                            <div className="flex justify-center p-2 bg-xcrow_secondary px-4 text-white space-x-4 rounded-md items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7 text-white group-hover:text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                              <p>Browse Files</p>
                            </div>
                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                              File type supported PDF, JPG, PNG, doc, docx, Max
                              size 10MB
                            </p>
                          </div>
                          <input
                            type="file"
                            className="opacity-0"
                            onChange={(e) =>
                              setAgreement(
                                e.target.files !== null ? e.target.files[0] : {}
                              )
                            }
                          />
                        </label>
                      </div>
                      {renderPreview()}
                    </div>
                  </div>

                  <div className="md:w-1/2 bg-gray-900 flex flex-col">
                    <div className="md:m-4">
                      <div className="flex justify-center max-w-full px-4 py-4">
                        <label className="flex flex-col w-full border rounded-xl border-blue-200 border-dashed hover:bg-gray-900 hover:border-gray-300">
                          <div className="flex flex-col items-center justify-center px-4 py-7 space-y-4">
                            <p className="pt-1 text-base tracking-wider text-gray-400 group-hover:text-gray-600">
                              Download Agreement Template Below
                            </p>
                            <a href="/template.pdf" download={"template.pdf"}>
                              <div className="flex justify-center p-2 bg-xcrow_secondary px-4 text-white space-x-4 rounded-md items-center my-3">
                                <AiOutlineCloudDownload size="20px" />
                                <p>Download Template</p>
                              </div>
                            </a>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="max-w-md flex flex-col space-y-12 mt-10">
            <div className="w-full flex flex-col pt-8">
              <button
                onClick={handleNext}
                className="uppercase bg-xcrow_secondary w-full px-4 py-4 rounded-xl text-white text-base"
              >
                {uploading ? <ScaleLoader /> : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default observer(AgreementUpload);
