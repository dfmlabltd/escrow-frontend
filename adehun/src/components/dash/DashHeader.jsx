import PaymentCard from "../../widgets/Dashboard/Card/PaymentCard";
import Transactioncard from "../../widgets/Dashboard/Card/TransactionCard";
import UserCard from "../../widgets/Dashboard/Card/UserCard";

function DashHeader() {

  return (
    <section className="relative w-full font-adreg py-2 mt-8" aria-labelledby="Dashboard Header">
      {/* header text */}
      <div className="relative w-full">
        <span className="text-white uppercase text-sm font-bold">Payments</span>
      </div>
      {/* header widgets */}
      <div className="grid grid-cols-3 items-stretch flex-row relative gap-4 w-full py-3">
        <PaymentCard />
        <Transactioncard />
        <UserCard />
      </div>
    </section>
  );
}

export default DashHeader;
