function InvoiceDetails(props) {
  return (
    <div className="w-full relative text-white text-adbase">
      <span class="block font-medium">{props.title}</span>
      <input type={props.type} id="invoiceInput" class="block h-10 py-1 w-full px-4 mt-1.5 text-adbase text-white border-none bg-dashbase/40" required />
    </div>
  );
}

export default InvoiceDetails;
