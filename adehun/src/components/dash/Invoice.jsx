import InvoiceHeader from "../../widgets/Dashboard/Invoice/InvoiceHeader";
import InvoiceCard from "../../widgets/Dashboard/Invoice/InvoiceCard";
import InvoiceDesc from "../../widgets/Dashboard/Invoice/InvoiceDesc";
import InvoiceCheckbox from "./Invoice/InvoiceCheckbox";
import InvoiceTable from "../../widgets/Dashboard/Invoice/InvoiceTable";
import InvoiceAdd from "./Invoice/InvoiceAdd";
import InvoiceTextarea from "../../widgets/Dashboard/Invoice/InvoiceTextarea";
import InvoiceFoot from "../../widgets/Dashboard/Invoice/InvoiceFoot";
import { useSelector } from "react-redux";

function Invoice() {
  const contractWidget = useSelector((state) => state.contractWidget);
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
