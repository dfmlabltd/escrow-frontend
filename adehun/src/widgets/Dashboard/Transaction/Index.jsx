import TransactionTbl from "../Table/Transaction";
import TrxCard from "./TransactionHeader";

function Transaction() {
  return (
    <section
      className="w-full relative flex flex-col"
      aria-labelledby="Transaction Header"
    >
      <div className="relative w-full font-adreg py-2 mt-8">
        <TrxCard />
      </div>
      <div
        className="relative w-full font-adreg py-2 mt-8 gap-4 flex-row"
        aria-labelledby="Transaction Table"
      >
        <TransactionTbl />
      </div>
    </section>
  );
}

export default Transaction;
