import { useMemo } from "react";
import moment from "moment";

type Props = {
  id: string;
  date: string;
  title: string;
  status: number;
  amount: number;
  page: string;
};

const TableRow: React.FC<Props> = ({
  id,
  date,
  title,
  status,
  amount,
  page,
}: Props) => {
  const humanizedDate = useMemo(() => {
    return moment(date).fromNow();
  }, [date]);

  return (
    <tr className="bg-dashsecondary text-white pb-4 border-b-[10px] border-dashprimary">
      <td className="py-3 px-6 text-right">
        {" "}
        <a href={`${page}/${id}`}>{humanizedDate}</a>
      </td>
      <td className="py-3 px-6 text-right">
        <a href={`${page}/${id}`}>{title}</a>
      </td>
      <td className="py-3 px-6 text-right">
        <a href={`${page}/${id}`}>{amount}</a>
      </td>
      <td className="py-3 px-6 text-right">
        <button className="text-xs border border-gray-300 dashwarning rounded-full px-5 py-1 font-bold tbl_status">
          {status}
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
