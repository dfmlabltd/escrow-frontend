import { useCallback, useEffect, useState } from "react";
import authAxios from "../../../axios/auth";
import TableRow from "./tablerow";

const TableRows = () => {
  const [contracts, setContracts] = useState<Array<any>>([]);

  const getContracts = useCallback(() => {
    const _getContracts = async () => {
      const { data } = await authAxios.get("contract");
      console.log(data.results);
      setContracts(data.results);
      return data;
    };
    _getContracts();
  }, []);

  useEffect(() => {
    getContracts();
  }, [getContracts]);

  return contracts ? (
    <>
      {contracts.map((contract) => (
        <TableRow
          id={contract.id}
          date={contract.date}
          title={contract.table}
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
