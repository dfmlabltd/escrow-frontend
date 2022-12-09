import PaymentCard from "./Card/Payment";
import Transactioncard from "./Card/Transaction";
import PaymentLinkCard from "./Card/PaymentLink";

const DashHeader: React.FC = () => {
  return (
    <section
      className="relative w-full font-adreg py-2 mt-8"
      aria-labelledby="Dashboard Header"
    >
      {/* header text */}
      <div className="relative w-full">
        <span className="text-white uppercase text-sm font-bold">Payments</span>
      </div>
      {/* header widgets */}
      <div className="grid grid-cols-3 items-stretch flex-row relative gap-4 w-full py-3">
        <PaymentCard />
        <Transactioncard />
        <PaymentLinkCard />
      </div>
    </section>
  );
};

export default DashHeader;