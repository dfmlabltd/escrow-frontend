import Transaction from "./Table/Transaction";
import IntroVideo from "./Intro/Introvideo";

const TableCard = () => {
  return (
    <section
      className="relative w-full font-adreg py-2 mt-8 gap-4 grid grid-cols-3 float-right items-stretch flex-row"
      aria-labelledby="Dashboard Body"
    >
      <Transaction />
      <IntroVideo />
    </section>
  );
};

export default TableCard;
