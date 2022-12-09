const InvoiceFooter: React.FC = () => {
  return (
    <div className="w-full relative flex flex-col text-white gap-y-4">
      <div className="pt-10 flex flex-row justify-between">
        <div>
          <span className="text-adxs">Invoice Issued by: Emmy Joe</span>
        </div>
        <div className="text-adxs flex items-center gap-x-3">
          <div>
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ msFilter: "" }}
              fill="currentColor"
            >
              <path d="M12 16l4-5h-3V4h-2v7H8z"></path>
              <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
            </svg>
          </div>
          <div>
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ msFilter: "" }}
              fill="currentColor"
            >
              <path d="M19 7h-1V2H6v5H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h2v3h12v-3h2c1.103 0 2-.897 2-2v-7c0-1.654-1.346-3-3-3zM8 4h8v3H8V4zm8 16H8v-4h8v4zm4-3h-2v-3H6v3H4v-7c0-.551.449-1 1-1h14c.552 0 1 .449 1 1v7z"></path>
              <path d="M14 10h4v2h-4z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceFooter;
