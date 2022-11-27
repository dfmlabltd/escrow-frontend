function PaymentCard() {
  return (
    <div className="flex flex-row flex-wrap bg-secondary p-6 rounded-sm gap-4 items-center justify-between text-white">
      <div className="flex flex-col gap-y-1">
        <span className="text-sm uppercase">Total Received</span>
        <p className="text-3xl font-bold">$70,450.98</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label className="text-xs status_card">Pending</label>
          <span className="text-sm mt-0.5">$125.77</span>
        </div>
        <div className="flex flex-col">
          <label className="text-xs status_card">In Draft</label>
          <span className="text-sm mt-0.5">$89.14</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
