import { useCallback, useEffect, useState } from "react";
import authAxios from "../../../axios/auth";

interface ContractData {
  total_contracts: number;
  total_active_contracts: number;
  total_draft_contracts: number;
}

const Transaction: React.FC = () => {
  const [contractData, setContractData] = useState<ContractData>();

  const getContractData = useCallback(() => {
    const _getContractData = async () => {
      const { data } = await authAxios.get("contract/data/");
      setContractData(data);
      return true;
    };
    return _getContractData();
  }, []);

  useEffect(() => {
    getContractData();
  }, []);

  return (
    <div className="grid grid-cols-2 flex-wrap bg-primary p-6 rounded-sm gap-4 justify-between text-white">
      <div className="flex flex-col gap-y-1">
        <span className="text-sm uppercase">Total Contracts</span>
        <p className="text-3xl font-bold">
          {contractData?.total_contracts ?? 0}
        </p>
        <div>
          <span className="bg-black text-xs capitalize text-green-400 p-0.5">
            {contractData?.total_draft_contracts ?? "No"} draft contracts
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <span className="text-sm uppercase">Active Contracts</span>
        <p className="text-3xl font-bold">
          {contractData?.total_active_contracts ?? 0}
        </p>
      </div>
    </div>
  );
};

export default Transaction;
