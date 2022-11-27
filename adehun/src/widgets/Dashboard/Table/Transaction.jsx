import TableRows from "./tablerows";

function TransacationTbl() {
  return (
    <>
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

      <div class="overflow-x-auto relative shadow-md">
        <div class="flex justify-between items-center py-6 gap-4">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div class="relative flex-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-dashsecondary">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
              class="block w-full h-12 pl-10 text-sm border-0 text-white bg-dashsecondary flex-1"
              placeholder="Search"
              required
            />
          </div>

          <div className="w-auto h-12 border-[0.1rem] rounded-[0.2rem] border-secondary">
            <button className="w-full flex flex-row h-full items-center place-content-center gap-3 px-6">
              <span className="text-sm text-white">Show All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
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
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-[0.8rem] text-gray-100 capitalize">
            <tr className="border-b-[10px] border-dashprimary">
              <th scope="col" class="py-3 px-6">
                No.
              </th>
              <th scope="col" class="py-3 px-6 text-right">
                Date
              </th>
              <th scope="col" class="py-3 px-6 text-right">
                Title
              </th>
              <th scope="col" class="py-3 px-6 text-right">
                Amount
              </th>
              <th scope="col" class="py-3 px-6 text-right">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <TableRows />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TransacationTbl;