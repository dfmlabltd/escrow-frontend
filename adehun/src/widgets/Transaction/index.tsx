import Nav from "../Dashboard/Nav";
import Transaction from "./transaction";

const Main: React.FC = () => {
  return (
    <main className="relative h-full min-h-screen main-adehun py-6 px-12 bg-dashprimary">
      <Nav />
      <Transaction />
    </main>
  );
};

export default Main;
