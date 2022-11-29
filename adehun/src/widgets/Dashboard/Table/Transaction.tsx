import TableRows from "./tablerows";

const TransacationTbl: React.FC = () => {
  return (
    <div className="relative w-full col-span-2 h-full block">
      <div className="relative w-full flex flex-row justify-between items-center gap-4">
        <div className="text-white flex flex-col gap-y-1">
          <p className="uppercase text-sm font-bold">Invoice</p>
          <span className="text-xs">List of all your recent trasaction</span>
        </div>
        <div>
          <button className="bg-secondary flex flex-row justify-between py-2 px-3 text-white items-center gap-1 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ msFilter: "" }}
              fill="rgba(255, 255, 255, 1)"
            >
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
            </svg>
            <span className="text-sm">New Invoice</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto relative shadow-md">
        <div className="flex justify-between items-center py-6 gap-4">
          <label
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-dashsecondary">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full h-12 pl-10 text-sm border-0 text-white bg-dashsecondary flex-1"
              placeholder="Search"
              required
            />
          </div>

          <div className="w-auto h-12 border-[0.1rem] rounded-[0.2rem] border-secondary">
            <button className="w-full flex flex-row h-full items-center place-content-center gap-3 px-6">
              <span className="text-sm text-white">Show All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ msFilter: "" }}
                fill="rgba(255,255, 255, 1)"
              >
                <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="relative w-full block max-h-[335px] overflow-y-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-[0.8rem] text-gray-100 capitalize">
              <tr className="border-b-[10px] border-dashprimary">
                <th scope="col" className="py-3 px-6">
                  No.
                </th>
                <th scope="col" className="py-3 px-6 text-right">
                  Date
                </th>
                <th scope="col" className="py-3 px-6 text-right">
                  Title
                </th>
                <th scope="col" className="py-3 px-6 text-right">
                  Amount
                </th>
                <th scope="col" className="py-3 px-6 text-right">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-sm max-h-16">
              <TableRows />
              <tr className="bg-dashsecondary text-white pb-4 border-b-[10px] border-dashprimary">
                <td className="py-3 px-6">1</td>
                <td className="py-3 px-6 text-right">Mar 27, 2020</td>
                <td className="py-3 px-6 text-right">Transatioo</td>
                <td className="py-3 px-6 text-right">$100</td>
                <td className="py-3 px-6 text-right">
                  <button className="text-xs border border-gray-300 dashwarning rounded-full px-5 py-1 font-bold tbl_status">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="bg-dashsecondary text-white pb-4 border-b-[10px] border-dashprimary">
                <td className="py-3 px-6">1</td>
                <td className="py-3 px-6 text-right">Mar 27, 2020</td>
                <td className="py-3 px-6 text-right">Transatioo</td>
                <td className="py-3 px-6 text-right">$100</td>
                <td className="py-3 px-6 text-right">
                  <button className="text-xs border border-gray-300 dashwarning rounded-full px-5 py-1 font-bold tbl_status">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="bg-dashsecondary text-white pb-4 border-b-[10px] border-dashprimary">
                <td className="py-3 px-6">1</td>
                <td className="py-3 px-6 text-right">Mar 27, 2020</td>
                <td className="py-3 px-6 text-right">Transatioo</td>
                <td className="py-3 px-6 text-right">$100</td>
                <td className="py-3 px-6 text-right">
                  <button className="text-xs border border-gray-300 dashwarning rounded-full px-5 py-1 font-bold tbl_status">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="bg-dashsecondary text-white pb-4 border-b-[10px] border-dashprimary">
                <td className="py-3 px-6">1</td>
                <td className="py-3 px-6 text-right">Mar 27, 2020</td>
                <td className="py-3 px-6 text-right">Transatioo</td>
                <td className="py-3 px-6 text-right">$100</td>
                <td className="py-3 px-6 text-right">
                  <button className="text-xs border border-gray-300 dashwarning rounded-full px-5 py-1 font-bold tbl_status">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="bg-dashsecondary text-white pb-4 border-b-[10px] border-dashprimary">
                <td className="py-3 px-6">1</td>
                <td className="py-3 px-6 text-right">Mar 27, 2020</td>
                <td className="py-3 px-6 text-right">Transatioo</td>
                <td className="py-3 px-6 text-right">$100</td>
                <td className="py-3 px-6 text-right">
                  <button className="text-xs border border-gray-300 dashwarning rounded-full px-5 py-1 font-bold tbl_status">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="bg-dashsecondary text-white pb-4 border-b-[10px] border-dashprimary">
                <td className="py-3 px-6">1</td>
                <td className="py-3 px-6 text-right">Mar 27, 2020</td>
                <td className="py-3 px-6 text-right">Transatioo</td>
                <td className="py-3 px-6 text-right">$100</td>
                <td className="py-3 px-6 text-right">
                  <button className="text-xs border border-gray-300 dashwarning rounded-full px-5 py-1 font-bold tbl_status">
                    Pending
                  </button>
                </td>
              </tr>
              <tr className="bg-dashsecondary text-white pb-4 border-b-[10px] border-dashprimary">
                <td className="py-3 px-6">1</td>
                <td className="py-3 px-6 text-right">Mar 27, 2020</td>
                <td className="py-3 px-6 text-right">Transatioo</td>
                <td className="py-3 px-6 text-right">$100</td>
                <td className="py-3 px-6 text-right">
                  <button className="text-xs border border-gray-300 dashwarning rounded-full px-5 py-1 font-bold tbl_status">
                    Pending
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransacationTbl;
