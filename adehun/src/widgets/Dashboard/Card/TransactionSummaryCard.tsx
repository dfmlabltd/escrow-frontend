import { useCallback, useEffect, useState } from "react";
import authAxios from "../../../axios/auth";

interface TransactionData {
  total_completed_count: number;
  total_withdrawal_count: number;
  total_deposited_count: number;
}

const TransactionSummary: React.FC = () => {
  const [transactionData, setTransactionData] = useState<TransactionData>();

  const getTransactionData = useCallback(() => {
    const _getTransactionData = async () => {
      const { data } = await authAxios.get("transaction/data/");
      setTransactionData(data);
      return true;
    };
    return _getTransactionData();
  }, []);

  useEffect(() => {
    getTransactionData();
  }, [getTransactionData]);
  return (
    <div className="flex flex-row flex-wrap bg-secondary p-6 rounded-sm gap-4 items-center justify-between text-white">
      <div className="flex flex-col gap-y-1">
        <span className="text-sm uppercase">Total Transaction Completed</span>
        <p className="text-3xl font-bold">
          {transactionData?.total_completed_count ?? 0}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label className="text-xs status_card">withdrawal</label>
          <span className="text-sm mt-0.5">
            {" "}
            {transactionData?.total_withdrawal_count ?? 0}
          </span>
        </div>
        <div className="flex flex-col">
          <label className="text-xs status_card">Deposit</label>
          <span className="text-sm mt-0.5">
            {" "}
            {transactionData?.total_deposited_count ?? 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionSummary;
