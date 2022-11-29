function InvoiceTable() {
  return (
    <div class="overflow-x-auto relative py-2">
      <table class="w-full text-sm text-left text-white text-adbase border-separate border-spacing-y-1">
        <thead class="text-white">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr class="relative">
            <td
              scope="row"
              class="py-1 font-medium whitespace-nowrap bg-dashbase/40 px-4 border-r-[0.25rem] border-dashsecondary"
            >
              Lega Advising
            </td>
            <td class="py-1 px-2 bg-red-400 border-r-[0.25rem] bg-dashbase/40 border-dashsecondary text-center">
              2
            </td>
            <td class="py-1 px-2 border-r-[0.25rem] bg-dashbase/40 border-dashsecondary text-center">
              Laptop
            </td>
            <td class="py-1 px-2 border-r-[0.25rem] bg-dashbase/40 border-dashsecondary text-center">
              $2999
            </td>
          </tr>
          <tr class="relative">
            <td
              scope="row"
              class="py-1 font-medium whitespace-nowrap bg-dashbase/40 px-4 border-r-[0.25rem] border-dashsecondary"
            >
              Lega Advising
            </td>
            <td class="py-1 px-2 bg-red-400 border-r-[0.25rem] bg-dashbase/40 border-dashsecondary text-center">
              2
            </td>
            <td class="py-1 px-2 border-r-[0.25rem] bg-dashbase/40 border-dashsecondary text-center">
              Laptop
            </td>
            <td class="py-1 px-2 border-r-[0.25rem] bg-dashbase/40 border-dashsecondary text-center">
              $2999
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InvoiceTable;
