import TableCard from "./Body";
import DashHeader from "./Header";
import Nav from "./Nav";
import ContractMain from "./ContractExpand";

const Main: React.FC = () => {
  return (
    <main className="relative h-full min-h-screen main-adehun py-6 px-12 bg-dashprimary">
      <Nav />
      <DashHeader />
      <TableCard />
      {/* <ContractMain /> */}
    </main>
  );
};

export default Main;
