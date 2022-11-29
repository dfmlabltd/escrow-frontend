import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { closeContractWidget } from "../../../redux/actions/contract/toggleContractWidget";

const InvoiceHeader = () => {
  const dispatch = useDispatch();

  const closeWidget = useCallback(() => {
    dispatch(closeContractWidget());
  }, [dispatch]);

  return (
    <div className="flex flex-col relative w-full gap-y-4 text-white">
      <div className="flex flex-row justify-between items-center gap-4">
        <h5 className="text-base font-bold pb-1">Create New Invoice</h5>
        <button
          onClick={() => {
            closeWidget();
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
      <div className="flex flex-row justify-between items-center gap-4 py-1">
        <h2 className="text-xl font-bold">#EAX123</h2>
        <button className="uppercase text-secondary font-bold text-xs flex flex-row items-center">
          <svg
            className="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ msFilter: "" }}
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
          </svg>
          Copy Payment Link
        </button>
      </div>
    </div>
  );
};

export default InvoiceHeader;
