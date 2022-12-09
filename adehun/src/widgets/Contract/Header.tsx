import { useContext } from "react";
import {
  IContractWidgetContext,
  ContractWidgetContext,
} from "../../contexts/contractWidget";

const Header = () => {
  const { close } = useContext<IContractWidgetContext>(ContractWidgetContext);

  return (
    <div className="flex flex-col relative w-full gap-y-4 text-white">
      <div className="flex flex-row justify-between items-center gap-4">
        <h5 className="text-xl font-bold pb-1">Create New Invoice</h5>
        <div className="flex items-center justify-between gap-x-4">
          <button className="relative inline-block pr-2">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ msFilter: "" }}
              fill="currentColor"
              stroke="currentColor"
            >
              <path d="M21 15.344l-2.121 2.121-3.172-3.172-1.414 1.414 3.172 3.172L15.344 21H21zM3 8.656l2.121-2.121 3.172 3.172 1.414-1.414-3.172-3.172L8.656 3H3zM21 3h-5.656l2.121 2.121-3.172 3.172 1.414 1.414 3.172-3.172L21 8.656zM3 21h5.656l-2.121-2.121 3.172-3.172-1.414-1.414-3.172 3.172L3 15.344z"></path>
            </svg>
          </button>
          <button
            onClick={() => {
              close();
            }}
            className="relative inline-block"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ msFilter: "" }}
              fill="currentColor"
              stroke="currentColor"
            >
              <path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-4 py-1"></div>
    </div>
  );
};

export default Header;
