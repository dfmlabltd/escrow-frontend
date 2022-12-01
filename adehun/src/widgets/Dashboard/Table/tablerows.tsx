import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authAxios from "../../../axios/auth";
import { IContract } from "../../../interface/contract";
import { contractsInitialized } from "../../../redux/actions/contract/contract";
import IState from "../../../redux/istore";
import TableRow from "./tablerow";

const TableRows = () => {
  const dispatch = useDispatch();

  const contracts: any = useSelector<IState>((state) => state.contracts);

  const getContracts = useCallback(() => {
    const _getContracts = async () => {
      const { data } = await authAxios.get("contract");
      dispatch(contractsInitialized(data.results));
      return data;
    };
    _getContracts();
  }, []);
  
  useEffect(() => {
    getContracts();
  }, [getContracts]);

  return contracts ? (
    <>
      {contracts.map((contract: IContract) => (
        <TableRow
          id={contract.id}
          date={contract.time_created}
          title={contract.title}
          status={contract.status}
          amount={contract.amount}
        />
      ))}
    </>
  ) : (
    <></>
  );
};

export default TableRows;
