import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authAxios from "../../../axios/auth";
import { IContract } from "../../../interfaces/contract";
import { contractsAdded } from "../../../redux/actions/contract/contract";
import IState from "../../../redux/istore";
import TableRow from "./tablerow";

const TableRows = () => {
  const dispatch = useDispatch();

  const contracts: any = useSelector<IState>((state) => state.contracts);

  const [page, setPage] = useState<number>(1);

  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  const getContracts = useCallback(() => {
    const _getContracts = async () => {
      const { data } = await authAxios.get(
        `contract/?page_size=10&page=${page}`
      );
      setHasNextPage(data.next ? true : false);
      dispatch(contractsAdded(data.results));
      return data;
    };
    return _getContracts();
  }, [dispatch, page, setHasNextPage]);

  const loadMore = useCallback(() => {
    console.log(1111);

    setPage((_page) => ++_page);
  }, [setPage]);

  useEffect(() => {
    getContracts();
  }, [page]);

  return contracts ? (
    <>
      {contracts.map((contract: IContract) => (
        <TableRow
          id={contract.id ?? 0}
          date={contract.time_created}
          title={contract.title}
          status={contract.status}
          amount={contract.amount}
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
