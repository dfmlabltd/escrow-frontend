const InvoiceTextarea: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 py-2">
      <div className="w-full relative text-white text-adbase">
        <span className="block font-medium">Description</span>
        <textarea
          id="notes"
          className="block px-4 py-2 mt-1.5 w-full text-adbase text-white bg-dashbase/40 border-none outline-none max-h-28"
          placeholder="Some additional notes for the client"
          aria-labelledby="Additiosnal Note"
        ></textarea>
      </div>
    </div>
  );
};

export default InvoiceTextarea;
