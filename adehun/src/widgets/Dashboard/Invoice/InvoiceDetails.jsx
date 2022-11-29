function InvoiceDetails(props) {
  return (
    <div className="w-full relative text-white text-adbase">
      <span class="block font-medium">{props.title}</span>
      <p className="bg-dashbase/40 px-4 py-2 mt-1.5">{props.desc}</p>
    </div>
  );
}

export default InvoiceDetails;
