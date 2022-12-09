import InvoiceHeader from "./InvoiceHeader";
import InvoiceBody from "./InvoiceBody";
import InvoiceFooter from "./InvoiceFooter";

const Receipt: React.FC = () => {
  return (
    <section
      className="w-full relative flex flex-col justify-center items-center mt-8"
      aria-labelledby="Transaction Receipt"
    >
      <div className="w-full relative flex flex-col justify-center items-center font-adreg">
        <div className="w-10/12 relative p-20 flex flex-col border border-dotted border-gray-500 invoice-wrapper">
          <InvoiceHeader />
          <InvoiceBody />
          <InvoiceFooter />
        </div>
      </div>
    </section>
  );
};

export default Receipt;
