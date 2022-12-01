import { useState } from "react";
import { Network } from "../../../interface/blockchain";

export interface InputPropsWithTitle {
  networks: Network[];
}

const Select: React.FC = () => {
  const [isOpenWidget, openWidget] = useState<boolean>(false);
  const [networkID, setNetworkID] = useState<number>(0);
  return (
    <div className="relative block">
      <div className="flex flex-col w-full bg-dashprimary p-6 text-white">
        <p className="text-sm">Blockchain Network</p>
        <button
          id="dropdown"
          onClick={() => openWidget((state) => !state)}
          className="text-white mt-1.5 bg-dashbase/40 focus:ring-4 focus:outline-none font-medium text-sm px-4 py-1.5 text-center inline-flex justify-between items-center w-full"
          type="button"
        >
          <span className="text-adbase">EAx Olagunju (eax email.com)</span>
          <svg
            className="ml-2 w-3 h-3"
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
        {isOpenWidget ? (
          <div className="z-10 w-full bg-dashbase rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownlist"
            >
              <li>
                <a href="#" className="block py-2 px-4">
                  List Goes here
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4">
                  List Goes Here
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Select;
