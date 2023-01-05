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

const useContractEdit = () => {
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

  const [id, setID] = useState<string>("");
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

  const editContractForm = useCallback(
    (draft: boolean) => {
      const _editContractForm = async () => {
        const data = {
          title,
          description,
          depositor_wallet,
          beneficiary: beneficiary_wallet,
          amount,
          token,
          draft,
        };
        console.log(data);
        try {
          const request = await authAxios.patch(`contract/${id}/`, data);
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
      _editContractForm();
    },
    [
      id,
      title,
      description,
      depositor_wallet,
      beneficiary_wallet,
      amount,
      token,
    ]
  );

  return {
    state,
    setID,
    setTitle,
    setDescription,
    setBeneficiaryWallet,
    setAmount,
    setToken,
    editContractForm,
    createWalletWidget,
    setDepositorWallet,
    depositor_wallet,
    wallets,
  };
};

export default useContractEdit;
