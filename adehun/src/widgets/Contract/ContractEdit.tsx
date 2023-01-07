import ContractHeader from "./Header";
import Togglebutton from "./Togglebutton";
import ContractSelect, { WalletSelectWidget } from "./Select";
import ContractInput from "./Input";
import ContractDescription from "./TextArea";
import InvoiceFoot from "./Footer";
import InvoiceAdd from "./Add";
import useContractEdit from "./hooks/useContractEdit";
import { useParams, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import authAxios from "../../axios/auth";
import ContractStatus from "../../utils/contract";
import { DASHBOARD_PAGE } from "../../utils/constants";
import { IContract } from "../../interfaces/contract";

const ContractEdit: React.FC = () => {
  const params = useParams();

  const navigate = useNavigate();

  const [contract, setContract] = useState<IContract>();

  const [network, setNetwork] = useState<number>();

  const {
    setID,
    setDepositorWallet,
    setTitle,
    setDescription,
    setBeneficiaryWallet,
    setAmount,
    setToken,
    editContractForm,
    createWalletWidget,
    wallets,
  } = useContractEdit();

  // TODO: preloader for this page lol!!!!

  useEffect(() => {
    const _getContract = async () => {
      const { data } = await authAxios.get(`contract/${params.id}`);

      if ("DRAFT" !== ContractStatus(data.status)) {
        navigate(DASHBOARD_PAGE);
        return;
      }
      setContract(data);
      setID(data?.id);
      setDepositorWallet(data?.depositor_wallet);
      setTitle(data?.title);
      setDescription(data?.description);
      setBeneficiaryWallet(data?.beneficiary_wallet);
      setAmount(data?.amount);
      setToken(data?.token);
      console.log(data);

      return data;
    };
    _getContract();
  }, []);

  useEffect(() => {
    getTokenDetail();
    console.log(contract?.token);
  }, [contract]);

  const getTokenDetail = useCallback(() => {
    const _getTokenDetail = async () => {
      const { data } = await authAxios.get(
        `blockchain/token/${contract?.token}/`
      );
      setNetwork(data.network);
      return data;
    };
    _getTokenDetail();
  }, [network, contract]);

  return (
    <div className="relative w-9/12 p-4">
      <div className="w-full relative block">
        <div className="flex flex-col relative w-full gap-y-4">
          <ContractHeader title="Edit Contract" />
          <div className="flex flex-row items-end justify-between gap-x-12">
            <div className="w-full">
              <ContractSelect
                current_network={network}
                current_token={network}
                setCurrentToken={setToken}
              />
            </div>
            <div className="w-full">
              <ContractInput
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                title="Amount"
                type="number"
                defaultValue={contract?.amount}
                placeholder="contract amount"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-x-12">
            <div className="w-full">
              <ContractInput
                onChange={(e) => setBeneficiaryWallet(e.target.value)}
                title="Beneficiary"
                type="text"
                defaultValue={contract?.beneficiary_wallet}
                placeholder="Input email, payment id, or wallet address"
              />{" "}
            </div>
            <div className="w-full">
              <ContractInput
                onChange={(e) => setTitle(e.target.value)}
                title="Title"
                defaultValue={contract?.title}
                placeholder="contract title"
              />
            </div>
          </div>
          {wallets.length > 0 ? (
            <WalletSelectWidget
              title="Wallet"
              text="Select Wallet"
              onChange={setDepositorWallet}
              value={parseInt(contract?.depositor_wallet ?? "0")}
              data={wallets}
            />
          ) : (
            <></>
          )}
          <a
            onClick={() => {
              createWalletWidget();
            }}
            href="#get"
          >
            <InvoiceAdd addtext="Add new wallwet" />
          </a>
          <div className="flex flex-row items-center justify-between gap-x-12">
            <div className="w-full">
              <ContractDescription
                onChange={(e) => setDescription(e.target.value)}
              />{" "}
            </div>
          </div>
          <div>
            <Togglebutton title="Advance Settings" />
            <hr className="border-t-[0.1rem] border-secondary overflow-visible mt-6"></hr>
          </div>
          <InvoiceFoot
            draft={() => editContractForm(true)}
            publish={() => editContractForm(false)}
          />
        </div>
      </div>
      <div className="w w-16 h-16 bg-secondary rounded-full absolute -ri -right-20 bottom-[6.5rem] flex justify-center items-center">
        <div className="relative rounded-full">
          <svg
            className="w-7 h-7 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ msFilter: "" }}
            fill="currentColor"
            stroke="none"
          >
            <path d="M4 21a1 1 0 00.24 0l4-1a1 1 0 00.47-.26L21 7.41a2 2 0 000-2.82L19.42 3a2 2 0 00-2.83 0L4.3 15.29a1.06 1.06 0 00-.27.47l-1 4A1 1 0 003.76 21 1 1 0 004 21zM18 4.41L19.59 6 18 7.59 16.42 6zM5.91 16.51L15 7.41 16.59 9l-9.1 9.1-2.11.52z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContractEdit;
