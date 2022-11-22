function Transactioncard() {
  return (
    <div className="grid grid-cols-2 flex-wrap bg-primary p-6 rounded-sm gap-4 justify-between text-white">
      <div className="flex flex-col gap-y-1">
        <span className="text-sm uppercase">Total Transaction</span>
        <p className="text-3xl font-bold">20</p>
        <div>
          <span className="bg-black text-xs capitalize text-green-400 p-0.5">
            21 Transactions in total
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <span className="text-sm uppercase">Active Transaction</span>
        <p className="text-3xl font-bold">1</p>
      </div>
    </div>
  );
}

export default Transactioncard;