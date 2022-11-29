import InvoiceHeader from "./InvoiceHeader";
import InvoiceCard from "./InvoiceCard";
import InvoiceDesc from "./InvoiceDesc";
import InvoiceTable from "./InvoiceTable";
import InvoiceTextarea from "./InvoiceTextarea";
import InvoiceFoot from "./InvoiceFoot";
import { useSelector } from "react-redux";
import IState from "../../../redux/istore";
import InvoiceAdd from "./InvoiceAdd";
import InvoiceCheckbox from "./InvoiceCheckbox";

function Invoice() {
  const contractWidget: any = useSelector<IState>(
    (state) => state.contractWidget
  );
  return contractWidget.isContractWidgetTogged ? (
    <section
      className="fixed h-screen w-[26rem] max-h-screen right-0 top-0 inset-y-0 overflow-y-auto z-50 font-adreg py-9 transition-transform duration-200 bg-dashsecondary px-9"
      aria-labelledby="Invoice"
    >
      <div className="flex flex-col relative w-full gap-y-4">
        <InvoiceHeader />
        <InvoiceCard />
        <InvoiceDesc />
        <InvoiceCheckbox checkboxtext="This is a recurring invoice (monthly)" />
        <InvoiceTable />
        <InvoiceAdd addtext="Add Item" />
        <InvoiceTextarea />
        <hr className="border-t-[0.01rem] border-secondary overflow-visible mt-6"></hr>
        <InvoiceFoot />
      </div>
    </section>
  ) : (
    <></>
  );
}

export default Invoice;
