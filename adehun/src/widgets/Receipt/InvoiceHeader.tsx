const InvoiceHeader: React.FC = () => {
  return (
    <div className="w-full relative flex flex-col text-white gap-y-4 pb-10">
      <div className="relative flex flex-row justify-between gap-4">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-extrabold text-2xl">Emmanuel A</h1>
          <p className="text-adxs">
            No 3, Opposite FCMB <br />
            Lagos Ibadan Express Road Nigeria
          </p>
        </div>
        <div className="flex flex-col gap-y-2 text-right">
          <h2 className="font-extrabold text-xl">Invoice</h2>
          <div className="overflow-x-auto relative">
            <table className="relative text-adxs w-full whitespace-nowrap">
              <tbody>
                <tr>
                  <td className="px-1">Invoice Date:</td>
                  <td className="px-1">Sept 6, 2022</td>
                </tr>
                <tr>
                  <td className="px-1">Due Date:</td>
                  <td className="px-1">Nov 6, 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="relative flex flex-row justify-between gap-4 mt-2 items-end">
        <div className="text-adxs leading-5">
          <h6>BILL TO</h6>
          <p>Richard Timi LTD</p>
          <span>invoice@eax.com</span>
        </div>
        <div className="relative flex flex-col gap-y-4">
          <div className="text-right">
            <span className="text-adxs">Item</span>
            <h1 className="font-extrabold text-2xl">Raspberry Pie Board</h1>
          </div>
          <div className="text-right">
            <span className="text-adxs">Amount</span>
            <h1 className="font-extrabold text-2xl">$194.454</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
