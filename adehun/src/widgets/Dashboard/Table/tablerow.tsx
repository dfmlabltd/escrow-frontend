type Props = {
  id: number;
  date: string;
  title: string;
  status: string;
  amount: number;
};

const TableRow: React.FC<Props> = ({
  id,
  date,
  title,
  status,
  amount,
}: Props) => {
  return (
    <tr className="bg-dashsecondary text-white pb-4 border-b-[10px] border-dashprimary">
      <td className="py-3 px-6">{id}</td>
      <td className="py-3 px-6 text-right">{date}</td>
      <td className="py-3 px-6 text-right">{title}</td>
      <td className="py-3 px-6 text-right">{amount}</td>
      <td className="py-3 px-6 text-right">
        <button className="text-xs border border-gray-300 dashwarning rounded-full px-5 py-1 font-bold tbl_status">
          {status}
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
