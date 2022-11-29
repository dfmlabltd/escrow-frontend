function InvoiceCheckbox(props) {
  return (
    <div class="flex relative py-2">
      <div class="flex items-center h-5">
        <input
          id="checkbox"
          aria-describedby="Checkbox"
          type="checkbox"
          value=""
          class="w-3 h-3 text-secondary bg-gray-400 rounded border-gray-100"
        />
      </div>
      <div class="ml-2 text-sm">
        <p id="checkboxtext" class="text-adbase font-normal text-white">
          {props.checkboxtext}
        </p>
      </div>
    </div>
  );
}

export default InvoiceCheckbox;
