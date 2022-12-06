import Nav from "../Nav";
import ContractEdit from "./ContractEdit";

const ContractMain = () => {
  return (
    <main className="relative h-full min-h-screen main-adehun py-6 px-12 bg-dashprimary">
      <Nav />
      <section
        className="relative w-full font-adreg py-2 mt-8 gap-4 float-right flex items-stretch justify-center"
        aria-labelledby="contract"
      >
        <ContractEdit />
      </section>
    </main>
  );
};

export default ContractMain;
