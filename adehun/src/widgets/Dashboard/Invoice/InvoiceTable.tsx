const InvoiceTable: React.FC = () => {
  return (
    <div className="overflow-x-auto relative py-2">
      <table className="w-full text-sm text-left text-white text-adbase border-separate border-spacing-y-1">
        <thead className="text-white">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="relative">
            <td
              scope="row"
              className="py-1 font-medium whitespace-nowrap bg-dashbase/40 px-4 border-r-[0.25rem] border-dashsecondary"
            >
              Lega Advising
            </td>
            <td className="py-1 px-2 bg-red-400 border-r-[0.25rem] bg-dashbase/40 border-dashsecondary text-center">
              2
            </td>
            <td className="py-1 px-2 border-r-[0.25rem] bg-dashbase/40 border-dashsecondary text-center">
              Laptop
            </td>
            <td className="py-1 px-2 border-r-[0.25rem] bg-dashbase/40 border-dashsecondary text-center">
              $2999
            </td>
          </tr>
          <tr className="relative">
            <td
              scope="row"
              className="py-1 font-medium whitespace-nowrap bg-dashbase/40 px-4 border-r-[0.25rem] border-dashsecondary"
            >
              Lega Advising
            </td>
            <td className="py-1 px-2 bg-red-400 border-r-[0.25rem] bg-dashbase/40 border-dashsecondary text-center">
              2
            </td>
            <td className="py-1 px-2 border-r-[0.25rem] bg-dashbase/40 border-dashsecondary text-center">
              Laptop
            </td>
            <td className="py-1 px-2 border-r-[0.25rem] bg-dashbase/40 border-dashsecondary text-center">
              $2999
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InvoiceTable;
