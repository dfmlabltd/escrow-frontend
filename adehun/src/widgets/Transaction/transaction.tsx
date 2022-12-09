import Table from "../Dashboard/Table/Transaction";
import Header from "./Header";

const Transaction: React.FC = () => {
  return (
    <section
      className="w-full relative flex flex-col"
      aria-labelledby="Transaction Header"
    >
      <div className="relative w-full font-adreg py-2 mt-8">
        <Header />
      </div>
      <div
        className="relative w-full font-adreg py-2 mt-8 gap-4 flex-row"
        aria-labelledby="Transaction Table"
      >
        <Table />
      </div>
    </section>
  );
};

export default Transaction;
