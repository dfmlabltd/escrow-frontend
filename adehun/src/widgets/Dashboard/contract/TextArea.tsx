import { ReactTextAreaProps } from "../../../interfaces";

const InvoiceTextarea: React.FC<ReactTextAreaProps> = (
  props: ReactTextAreaProps
) => {
  return (
    <div className="grid grid-cols-1 gap-4 py-2">
      <div className="w-full relative text-white text-adbase">
        <span className="block font-medium">Description</span>
        <textarea
          {...props}
          id="notes"
          className="block px-4 py-2 mt-1.5 w-full text-sm text-white bg-gray-800 border-none outline-none max-h-32"
          placeholder="Some additional notes for the client"
          aria-labelledby="Additiosnal Note"
        ></textarea>
      </div>
    </div>
  );
};

export default InvoiceTextarea;
