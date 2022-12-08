import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  ContractWidgetContext,
  IContractWidgetContext,
} from "../../../contexts/contractWidget";
import authAxios from "../../../axios/auth";
import Swal from "sweetalert2";
import useToast from "../../../hooks/toast";
import { useDispatch } from "react-redux";
import { contractAdded } from "../../../redux/actions/contract/contract";
import { regexValidator } from "../../../utils/validators";
import { utils } from "ethers";
import validateEmail from "validator/lib/isEmail";

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

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [depositor_wallet, setDepositorWallet] = useState<number>(0);
  const [beneficiary_wallet, setBeneficiaryWallet] = useState<string>("");

  // const [agreement, setAgreement] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [token, setToken] = useState<number>(0);
  const { toast, persistentToast } = useToast();

  const isTitle = useCallback(() => {
    return title.length > 0 && title.length < 128;
  }, [title]);

  const isBeneficiary = useCallback(() => {
    return (
      regexValidator("/^a-z$/{5, 16}", beneficiary_wallet) ||
      utils.isAddress(beneficiary_wallet) ||
      validateEmail(beneficiary_wallet)
    );
  }, [beneficiary_wallet]);

  const isToken = useCallback(() => {
    return token > 0 ? true : false;
  }, [token]);

  const isAmount = useCallback(() => {
    return amount > 0;
  }, [amount]);

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

  const isValidForm = useCallback(() => {
    if (!isToken()) {
      persistentToast.fire({
        title: "contract token is invalid",
        icon: "error",
      });
      return false;
    }

    if (!isTitle()) {
      persistentToast.fire({
        title: "contract title is invalid",
        icon: "error",
      });
      return false;
    }

    if (!isAmount()) {
      persistentToast.fire({
        title: "contract amount is invalid",
        icon: "error",
      });
      return false;
    }

    if (!isBeneficiary()) {
      persistentToast.fire({
        title: "contract amount is invalid",
        icon: "error",
      });
      return false;
    }
  }, [isAmount, isBeneficiary, isTitle, isToken]);

  const createContractForm = useCallback(
    (draft: boolean) => {
      if (!isValidForm()) {
        return false;
      }
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
    [
      title,
      description,
      depositor_wallet,
      beneficiary_wallet,
      amount,
      token,
      isValidForm,
    ]
  );

  return {
    state,
    setTitle,
    setDescription,
    setBeneficiaryWallet,
    setAmount,
    setToken,
    createContractForm,
    createWalletWidget,
    setDepositorWallet,
    amount,
    title,
    depositor_wallet,
    beneficiary_wallet,
    wallets,
  };
};

export default useContractEdit;
