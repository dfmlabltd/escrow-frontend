import ContractHeader from "./Header";
import ContractSelect from "./Select";
import ContractInput from "./Input";
import ContractDescription from "./TextArea";
import ContractFoot from "./Footer";
// import ContractCheckbox from "./Checkbox";
import ContractToggle from "./Togglebutton";
import { useContext, useState } from "react";
import {
  ContractWidgetContext,
  IContractWidgetContext,
} from "../../../contexts/contractWidget";

function Contract() {
  const { state } = useContext<IContractWidgetContext>(ContractWidgetContext);

  const [title, setTitle] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [beneficiary_wallet, setBeneficiaryWallet] = useState<string>("");
  // const [agreement, setAgreement] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [token, setToken] = useState<number>(0);
  const [draft, setDraft] = useState<boolean>(false);

  return state ? (
    <section className="w-full absolute inset-y-0 top-0 block min-h-screen max-h-screen backdrop-blur-sm bg-dashprimary/5">
      <div
        className="fixed h-screen w-[48rem] max-h-screen right-0 top-0 inset-y-0 overflow-y-auto z-50 font-adreg py-9 transition-transform duration-200 bg-dashsecondary px-9"
        aria-labelledby="Contract"
      >
        <div className="flex flex-col relative w-full gap-y-4">
          <ContractHeader />
          <ContractSelect />
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
          <ContractInput
            onChange={(e) => setBeneficiaryWallet(e.target.value)}
            title="Beneficiary"
            placeholder="Beneficiary's Email or Payment Link"
          />
          <ContractDescription
            onChange={(e) => setDescription(e.target.value)}
          />
          <ContractToggle title="Advance settings" />
          <hr className="border-t-[0.01rem] border-secondary overflow-visible mt-6"></hr>
          <ContractFoot />
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default Contract;
