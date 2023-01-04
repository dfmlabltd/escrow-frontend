import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import authAxios from "../../../axios/auth";
import useToast from "../../../hooks/toast";
import { IContract } from "../../../interfaces/contract";
import IToken from "../../../interfaces/token";
import ContractStatus from "../../../utils/contract";

interface IContractDetail {
  beneficiary: string;
  depositor: string;
  owner: string;
}

const Card: React.FC = () => {
  const params = useParams();

  const [isOpen, open] = useState<boolean>();

  const [contract, setContract] = useState<IContract>();

  const [contractDetail, setContractDetail] = useState<IContractDetail>();

  const [tokenDetail, setTokenDetail] = useState<IToken>();

  const { toast } = useToast();

  const getContract = useCallback(() => {
    const _getContract = async () => {
      const { data } = await authAxios.get(`contract/${params.id}`);
      setContract(data);
      return data;
    };
    _getContract();
  }, [setContract, params.id]);

  useEffect(() => {
    getContract();
    getContractDetail();
  }, []);

  useEffect(() => {
    getTokenDetail();
  }, [contract]);

  const getContractDetail = useCallback(() => {
    const _getContractDetail = async () => {
      const { data } = await authAxios.get(`contract/detail/${params.id}/`);
      setContractDetail(data);
      return data;
    };
    _getContractDetail();
  }, [setContractDetail, params.id]);

  const getTokenDetail = useCallback(() => {
    const _getTokenDetail = async () => {
      const { data } = await authAxios.get(
        `blockchain/token/${contract?.token}/`
      );
      setTokenDetail(data);
      return data;
    };
    _getTokenDetail();
  }, [setTokenDetail, contract]);

  const cancelContract = useCallback(() => {
    const _cancelContract = async () => {
      try {
        const { data } = await authAxios.delete(`contract/${params.id}`);
        toast.fire({
          icon: "success",
          title: "Contract cancelled successfully",
        });
        window.location.reload();
        return data;
      } catch (error) {
        toast.fire({
          icon: "error",
          title: "can not cancel contract",
        });
      }
    };
    _cancelContract();
  }, [params.id, toast]);

  const publishContract = useCallback(() => {
    const _publishContract = async () => {
      if (!contract) {
        return;
      }

      const _contract = contract;

      _contract.draft = false;

      delete _contract.id;

      try {
        const { data } = await authAxios.patch(
          `contract/${params.id}/`,
          _contract
        );
        toast.fire({
          icon: "success",
          title: "contract successfully published",
        });
        window.location.reload();
        return data;
      } catch (error) {
        toast.fire({
          icon: "error",
          title: "can not published contract",
        });
      }
    };
    _publishContract();
  }, [contract, params.id, toast]);

  return (
    <div className="flex flex-col flex-wrap bg-dashsecondary p-6 rounded-sm gap-4 justify-between text-white">
      <div className="flex flex-row justify-between gap-4">
        <h2 className="text-xl font-extrabold tracking-wider">
          Contract Details
        </h2>
        <p className="relative">
          <ul className="flex flex-row gap-2">
            <li className="bg-dashprimary w-6 h-6 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ msFilter: "" }}
                fill="currentColor"
              >
                <path d="M10 15.586l-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
              </svg>
            </li>
            <li className="bg-dashprimary w-6 h-6 rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ msFilter: "" }}
                fill="currentColor"
              >
                <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z"></path>
              </svg>
            </li>
            <li className="bg-dashprimary w-6 h-6 rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ msFilter: "" }}
                fill="currentColor"
              >
                <path d="M4 21a1 1 0 00.24 0l4-1a1 1 0 00.47-.26L21 7.41a2 2 0 000-2.82L19.42 3a2 2 0 00-2.83 0L4.3 15.29a1.06 1.06 0 00-.27.47l-1 4A1 1 0 003.76 21 1 1 0 004 21zM18 4.41L19.59 6 18 7.59 16.42 6zM5.91 16.51L15 7.41 16.59 9l-9.1 9.1-2.11.52z"></path>
              </svg>
            </li>
            {ContractStatus(contract?.status ?? 0) !== "DRAFT" ? (
              <li className="bg-dashprimary w-6 h-6 rounded-full flex items-center justify-center">
                <span
                  onClick={() => {
                    open((state) => !state);
                  }}
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ msFilter: "" }}
                    fill="currentColor"
                  >
                    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                  </svg>
                </span>
                {isOpen ? (
                  <div
                    id="dropdownList"
                    className="z-10 w-28 bg-dashprimary rounded shadow absolute top-7 left-1"
                  >
                    <ul
                      className="py-1 text-xs text-gray-400"
                      aria-labelledby="dropdownMenu"
                    >
                      <li>
                        <NavLink
                          to={`/contract/edit/${params.id}`}
                          className="block py-2 px-4 hover:bg-gray-800"
                        >
                          edit
                        </NavLink>
                      </li>
                      <li>
                        <a
                          href="#delete"
                          onClick={cancelContract}
                          className="block py-2 px-4 hover:bg-gray-800"
                        >
                          cancel{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={publishContract}
                          href="#publish"
                          className="block py-2 px-4 hover:bg-gray-800"
                        >
                          publish{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </li>
            ) : (
              <></>
            )}
          </ul>
        </p>
      </div>
      <div className="flex flex-row justify-between py-2 gap-4">
        <div className="flex flex-col text-sm gap-y-0.5">
          <span className="text text-slate-400 font-bold">Title</span>
          <h5 className="mt-1.5">{contract?.title}</h5>
        </div>
        <div className="flex flex-col text-sm gap-y-0.5 text-right">
          <span className="relative">Amount</span>
          <p>
            <span className="text-2xl text-dashsuccessalt">
              {contract?.amount}&nbsp;
            </span>
            <span>{tokenDetail?.symbol}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between py-2 gap-4">
        <div className="flex flex-col text-sm gap-y-0.5 justify-end">
          <span className="text text-slate-400 font-bold">created by</span>
          <h5 className="mt-1.5">{contractDetail?.owner}</h5>
        </div>
      </div>
      <div className="flex flex-row justify-between py-2 gap-4">
        <div className="flex flex-col text-sm gap-y-0.5 justify-end">
          <span className="text text-slate-400 font-bold">beneficiary</span>
          <h5 className="mt-1.5">{contractDetail?.beneficiary}</h5>
        </div>
      </div>
      <div className="flex flex-row justify-between py-2 gap-4">
        <div className="flex flex-col text-sm gap-y-0.5 justify-end">
          <span className="text text-slate-400 font-bold">depositor</span>
          <h5 className="mt-1.5">{contractDetail?.depositor}</h5>
        </div>
      </div>
      <div className="flex flex-row justify-between py-2 gap-4">
        <div className="flex flex-col text-sm gap-y-0.5 justify-end">
          <span className="text text-slate-400 font-bold">Description</span>
          <h5 className="mt-1.5">
            {contract?.description ? contract?.description : "None"}
          </h5>
        </div>
      </div>{" "}
      <div className="flex flex-row justify-between py-2 gap-4">
        <div className="flex flex-col text-sm gap-y-0.5 justify-end">
          <span className="relative text-slate-400">date created</span>
          <p>
            {moment(contract?.time_created).format("MMMM Do YYYY, h : mm a")}
          </p>
        </div>
        <div className="flex flex-col text-sm gap-y-0.5 text-right">
          <span className="relative text-slate-400 mt-3">Contract Status</span>
          <p className="text-dashsuccessalt">
            {ContractStatus(contract?.status ?? 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
