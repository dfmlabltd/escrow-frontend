import TableCard from "./Body";
import DashHeader from "./Header";
import Nav from "./Nav";

const Main: React.FC = () => {
  return (
    <main className="relative h-full min-h-screen main-adehun py-6 px-12 bg-dashprimary">
      <Nav />
      <DashHeader />
      <TableCard />
    </main>
  );
};

export default Main;
