import Transactions from "../Dashboard/Table/Transaction";
import Header from "./Header";

interface Props {
  page: string;
  url: string;
}

const Transaction: React.FC<Props> = ({ page, url }: Props) => {
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
        <Transactions url={url} page={page} />
      </div>
    </section>
  );
};

export default Transaction;
