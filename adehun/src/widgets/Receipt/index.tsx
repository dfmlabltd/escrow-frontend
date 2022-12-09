import Nav from "../Dashboard/Nav";
import Receipt from "./receipt";

const Main: React.FC = () => {
  return (
    <main className="relative h-full min-h-screen main-adehun py-6 px-12 bg-dashprimary">
      <Nav />
      <Receipt />
    </main>
  );
};

export default Main;
