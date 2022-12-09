interface Props {
  addtext: string;
}

const InvoiceAdd: React.FC<Props> = ({ addtext }: Props) => {
  return (
    <div className="flex flex-row text-secondary py-2">
      <div className="flex items-center h-5">
        <svg
          className="w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ msFilter: "" }}
          fill="none"
          stroke="currentColor"
        >
          <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
        </svg>
      </div>
      <div className="ml-2 text-sm">
        <p id="Addtext" className="text-adbase font-normal uppercase">
          {addtext}
        </p>
      </div>
    </div>
  );
};

export default InvoiceAdd;
