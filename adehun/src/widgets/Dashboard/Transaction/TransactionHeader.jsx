import Invoice from "../Card/Invoice";
import PaymentCard from "../Card/Payment";
import PaymentLinkCard from "../Card/PaymentLink";

function TrxCard() {
  return (
    <div
      className="relative w-full font-adreg flex flex-col"
      aria-labelledby="Transaction Card"
    >
      {/* header widgets */}
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
}

export default TrxCard;
