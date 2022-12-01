import ContractHeader from "./Header";
import ContractSelect from "./Select";
import ContractInputWidget from "./TextInput";
import ContractDescription from "./TextArea";
import ContractTable from "./Table";
import ContractFoot from "./Footer";
import { useSelector } from "react-redux";
import IState from "../../../redux/istore";
import ContractAdd from "./Add";
import ContractCheckbox from "./Checkbox";

function Contract() {
  const contractWidget: any = useSelector<IState>(
    (state) => state.contractWidget
  );
  return contractWidget.isContractWidgetTogged ? (
    <section
      className="fixed h-screen w-[48rem] max-h-screen right-0 top-0 inset-y-0 overflow-y-auto z-50 font-adreg py-9 transition-transform duration-200 bg-dashsecondary px-9"
      aria-labelledby="Contract"
    >
      <div className="flex flex-col relative w-full gap-y-4">
        <ContractHeader />
        <ContractSelect />
        <ContractInputWidget title="Title" placeholder="contract title" />
        <ContractInputWidget
          title="Title"
          type="number"
          placeholder="contract title"
        />

        <ContractCheckbox title="This is a recurring Contract (monthly)" />
        <ContractTable />
        <ContractAdd addtext="Add Item" />
        <ContractDescription />
        <hr className="border-t-[0.01rem] border-secondary overflow-visible mt-6"></hr>
        <ContractFoot />
      </div>
    </section>
  ) : (
    <></>
  );
}

export default Contract;
