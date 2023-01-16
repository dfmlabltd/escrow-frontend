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

  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const [page, setPage] = useState<number>(1);

  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  const getTransactions = useCallback(() => {
    const _getTransactions = async () => {
      const { data } = await authAxios.get(
        `transaction/list/${params.id}/?page_size=10&page=${page}`
      );
      if (data.results) {
        setTransactions((_transactions) => [..._transactions, ...data.results]);
      }
      setHasNextPage(data.next ? true : false);
      return data;
    };
    _getTransactions();
  }, [setTransactions, page, setHasNextPage]);

  const loadMore = useCallback(() => {
    const _loadMore = async () => {
      setPage((_page) => _page++);
      getTransactions();
    };
    _loadMore();
  }, [setPage]);

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
      {hasNextPage ? (
        <button
          className="bg-primary flex flex-row justify-between py-2 px-3 text-white items-center gap-1 rounded-sm"
          onClick={loadMore}
        >
          Load more
        </button>
      ) : (
        <></>
      )}
    </>
  ) : (
    <></>
  );
};

export default TableRows;
