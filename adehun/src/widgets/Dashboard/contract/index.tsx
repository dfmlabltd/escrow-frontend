import ContractHeader from "./Header";
import ContractSelect, { WalletSelectWidget } from "./Select";
import ContractInput from "./Input";
import ContractDescription from "./TextArea";
import ContractFoot from "./Footer";
// import ContractCheckbox from "./Checkbox";
import ContractToggle from "./Togglebutton";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  ContractWidgetContext,
  IContractWidgetContext,
} from "../../../contexts/contractWidget";
import authAxios from "../../../axios/auth";
import Swal from "sweetalert2";
import useToast from "../../../hooks/toast";
import { useDispatch } from "react-redux";
import { contractAdded } from "../../../redux/actions/contract/contract";

function Contract() {
  const { state, close } = useContext<IContractWidgetContext>(
    ContractWidgetContext
  );
  const [wallets, setWallets] = useState<[]>([]);

  const dispatch = useDispatch();

  const getWallets = useCallback(() => {
    const _getWallets = async () => {
      const { data } = await authAxios.get("wallet/");
      setWallets(data);
      return true;
    };
    return _getWallets();
  }, []);

  useEffect(() => {
    getWallets();
  }, []);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [depositor_wallet, setDepositorWallet] = useState<number>(0);
  const [beneficiary_wallet, setBeneficiaryWallet] = useState<string>("");

  // const [agreement, setAgreement] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [token, setToken] = useState<number>(0);
  const { toast } = useToast();

  const createWalletWidget = useCallback(() => {
    Swal.fire({
      title: "Input your wallet address",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Add",
      showLoaderOnConfirm: true,
      preConfirm: (wallet) => {
        return authAxios
          .post("wallet/", { address: wallet })
          .then(async (response) => {
            if (await getWallets()) {
              setDepositorWallet(response.data.id);
            }
          })
          .catch((error) => {
            Swal.showValidationMessage(`invalid wallet address`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  }, [setDepositorWallet, getWallets]);

  const createContractForm = useCallback(
    (draft: boolean) => {
      const __createContractForm = async () => {
        const data = {
          title,
          description,
          depositor_wallet,
          beneficiary: beneficiary_wallet,
          amount,
          token,
          draft,
        };
        try {
          const request = await authAxios.post("contract/", data);
          toast.fire({
            title: "Contract created successfully",
            icon: "success",
          });
          dispatch(contractAdded(request.data));

          close();
        } catch (error) {
          toast.fire({
            title: "Error creating contract",
            icon: "error",
          });
        }
      };
      __createContractForm();
    },
    [title, description, depositor_wallet, beneficiary_wallet, amount, token]
  );

  return state ? (
    <section className="w-full absolute inset-y-0 top-0 block min-h-screen max-h-screen backdrop-blur-sm bg-dashprimary/5">
      <div
        className="fixed h-screen w-[48rem] max-h-screen right-0 top-0 inset-y-0 overflow-y-auto z-50 font-adreg py-9 transition-transform duration-200 bg-dashsecondary px-9"
        aria-labelledby="Contract"
      >
        <div className="flex flex-col relative w-full gap-y-4">
          <ContractHeader />
          <ContractSelect setCurrentToken={setToken} />
          <ContractInput
            onChange={(e) => setTitle(e.target.value)}
            title="Title"
            placeholder="contract title"
          />
          <ContractInput
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            title="Amount"
            type="number"
            placeholder="contract amount"
          />
          {wallets.length > 0 ? (
            <WalletSelectWidget
              title="Wallet"
              text="Select Wallet"
              onChange={setDepositorWallet}
              value={depositor_wallet}
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
            + add new wallet
          </a>

          <ContractInput
            onChange={(e) => setBeneficiaryWallet(e.target.value)}
            title="Beneficiary"
            type="text"
            placeholder="Input email, payment id, or wallet address"
          />

          <ContractDescription
            onChange={(e) => setDescription(e.target.value)}
          />
          <ContractToggle title="Advance settings" />
          <hr className="border-t-[0.01rem] border-secondary overflow-visible mt-6"></hr>
          <ContractFoot
            draft={() => {
              createContractForm(true);
            }}
            publish={() => {
              createContractForm(false);
            }}
          />
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default Contract;
