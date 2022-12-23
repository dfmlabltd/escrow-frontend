import { useContext } from "react";
import {
  ContractWidgetContext,
  IContractWidgetContext,
} from "../../../contexts/contractWidget";
import Search from "../Search";
import TableRows from "./tablerows";

interface Props {
  url: string;
  page: string;
}

const Transaction: React.FC<Props> = ({ url, page }: Props) => {
  const { open } = useContext<IContractWidgetContext>(ContractWidgetContext);

  return (
    <div className="relative w-full col-span-2 h-full block">
      <div className="relative w-full flex flex-row justify-between items-center gap-4">
        <div className="text-white flex flex-col gap-y-1">
          <p className="uppercase text-sm font-bold">Transactions</p>
          <span className="text-xs">List of all your recent trasactions</span>
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
            <span onClick={open} className="text-sm">
              New Contract
            </span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto relative shadow-md">
        <Search />
        <div className="relative w-full block max-h-[335px] overflow-y-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-[0.8rem] text-gray-100 capitalize">
              <tr className="border-b-[10px] border-dashprimary">
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
              <TableRows url={url} page={page} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
