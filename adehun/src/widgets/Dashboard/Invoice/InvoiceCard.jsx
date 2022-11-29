function InvoiceCard() {
  return (
    <div className="relative block py-2">
      <div className="flex flex-col w-full bg-dashprimary p-6 text-white">
        <p className="text-sm">Receipient Email</p>
        <button
          id="dropdown"
          class="text-white mt-1.5 bg-dashbase/40 focus:ring-4 focus:outline-none font-medium text-sm px-4 py-1.5 text-center inline-flex justify-between items-center w-full"
          type="button"
        >
          <span className="text-adbase">EAx Olagunju (eax email.com)</span>
          <svg
            class="ml-2 w-3 h-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div class="hidden z-10 w-full bg-dashbase rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownlist"
          >
            <li>
              <a href="#" class="block py-2 px-4">
                List Goes here
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4">
                List Goes Here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InvoiceCard;
