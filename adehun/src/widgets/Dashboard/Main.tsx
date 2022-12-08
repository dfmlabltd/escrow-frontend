import TableCard from "./Body";
import DashHeader from "./Header";
import Nav from "./Nav";
import ContractMain from "./Contract/ContractMain";
import Transaction from "./Transaction/Index";
import Trxreceipt from "./Receipt";

const Main: React.FC = () => {
  return (
    <main className="relative h-full min-h-screen main-adehun py-6 px-12 bg-dashprimary">
      <Nav />
      <DashHeader />
      <TableCard />
      {/* <ContractMain /> */}
      {/* <Transaction /> */}
      {/* <Trxreceipt /> */}
    </main>
  );
};

export default Main;
