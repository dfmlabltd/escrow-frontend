import InvoiceDetails from "./InvoiceDetails";

const InvoiceDesc: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 py-2">
        <InvoiceDetails title="Project/Description" type="text" />
      </div>
      <div className="grid grid-cols-2 gap-4 py-2">
        <InvoiceDetails title="Issued On" type="date" />
        <InvoiceDetails title="Due On" type="date" />
      </div>
    </>
  );
};

export default InvoiceDesc;
