import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authAxios from "../../../../axios/auth";
import TableRow from "./tablerow";

interface ITransaction {
  id: string;
  title: string;
  time_created: string;
  description: string;
  status: number;
  amount: number;
}

const TableRows = () => {
  const params = useParams();

  const [transactions, setTransactions] = useState<[]>([]);

  const getTransactions = useCallback(() => {
    const _getTransactions = async () => {
      const { data } = await authAxios.get(`transaction/list/${params.id}/`);
      setTransactions(data.results);
      return data;
    };
    _getTransactions();
  }, [setTransactions]);

  useEffect(() => {
    getTransactions();
  });

  return transactions ? (
    <>
      {transactions.map((transaction: ITransaction) => (
        <TableRow
          page={"transactions"}
          id={transaction.id ?? 0}
          date={transaction.time_created}
          title={transaction.title}
          status={transaction.status}
          amount={transaction.amount}
        />
      ))}
    </>
  ) : (
    <></>
  );
};

export default TableRows;
