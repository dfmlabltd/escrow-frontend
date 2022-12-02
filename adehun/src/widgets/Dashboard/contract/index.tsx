import ContractHeader from "./Header";
import ContractSelect from "./Select";
import ContractInput from "./Input";
import ContractDescription from "./TextArea";
import ContractFoot from "./Footer";
import { useSelector } from "react-redux";
import IState from "../../../redux/istore";
import ContractCheckbox from "./Checkbox";
import ContractToggle from "./Togglebutton";

function Contract() {
  const contractWidget: any = useSelector<IState>(
    (state) => state.contractWidget
  );
  return contractWidget.isContractWidgetTogged ? (
    <section className="w-full absolute inset-y-0 top-0 block min-h-screen max-h-screen backdrop-blur-sm bg-dashprimary/5">
      <div
        className="fixed h-screen w-[28rem] max-h-screen right-0 top-0 inset-y-0 overflow-y-auto z-50 font-adreg py-9 transition-transform duration-200 bg-dashsecondary px-9"
        aria-labelledby="Contract"
      >
        <div className="flex flex-col relative w-full gap-y-4">
          <ContractHeader />
          <ContractSelect />
          <ContractInput title="Title" placeholder="contract title" />
          <ContractInput
            title="Amount"
            type="number"
            placeholder="contract amount"
          />
          <ContractInput
            title="Beneficiary"
            placeholder="Beneficiary's Email or Payment Link"
          />
          <ContractCheckbox title="This is a recurring Contract (monthly)" />
          <ContractDescription />
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
