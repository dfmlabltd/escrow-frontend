import Invoice from "../Dashboard/Card/Contract";
import PaymentLinkCard from "../Dashboard/Card/PaymentLink";

const Header: React.FC = () => {
  return (
    <div
      className="relative w-full font-adreg flex flex-col"
      aria-labelledby="Transaction Card"
    >
      <div className="flex items-stretch justify-between flex-row relative gap-4 w-full py-3">
        <div className="relative w-[45%]">
          <Invoice />
        </div>
        <div className="relative w-2/5">
          <PaymentLinkCard />
        </div>
      </div>
    </div>
  );
};

export default Header;
