import InvoiceDetails from "../../../components/dash/Invoice/InvoiceDetails";

const InvoiceDesc: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 py-2">
        <InvoiceDetails title="Project/Description" desc="Legal Consulting" />
      </div>
      <div className="grid grid-cols-2 gap-4 py-2">
        <InvoiceDetails title="Issued On" desc="Oct 25, 2022" />
        <InvoiceDetails title="Due On" desc="Nov 1, 2022" />
      </div>
    </>
  );
};

export default InvoiceDesc;
