function InvoiceTextarea() {
  return (
    <div className="grid grid-cols-1 gap-4 py-2">
      <div className="w-full relative text-white text-adbase">
        <span class="block font-medium">Additional Notes</span>
        <textarea
          id="notes"
          rows="3"
          class="block px-4 py-2 mt-1.5 w-full text-adbase text-white bg-dashbase/40 border-none outline-none max-h-28"
          placeholder="Some additional notes for the client"
          aria-labelledby="Additional Note"
        ></textarea>
      </div>
    </div>
  );
}

export default InvoiceTextarea;
