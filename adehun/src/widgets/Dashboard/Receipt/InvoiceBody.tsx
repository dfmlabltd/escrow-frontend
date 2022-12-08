const InvoiceBody = () => {
  return (
    <div className="w-full relative flex flex-col text-white gap-y-4 pb-10">
      <div className="pt-10 flex flex-col">
        <h2 className="font-extrabold text-xl">
          Bank account details(Swift transfer)
        </h2>
        <div className="relative flex flex-col">
          <div className="grid grid-cols-4 gap-y-8 gap-x-4 mt-10 items-end">
            <div className="text-adxs">
              <span>Recipient type</span>
              <h6>Person</h6>
            </div>
            <div className="text-adxs">
              <span>Full name of the account holder</span>
              <h6>Emmanuel A</h6>
            </div>
            <div className="text-adxs">
              <span>Email</span>
              <h6>eax@gmail.com</h6>
            </div>
            <div className="text-adxs">
              <span>Account number</span>
              <h6>0233693276</h6>
            </div>
            <div className="text-adxs">
              <span>Bank Name</span>
              <h6>GtBank</h6>
            </div>
            <div className="text-adxs">
              <span>Country</span>
              <h6>United State</h6>
            </div>
            <div className="text-adxs">
              <span>City</span>
              <h6>New York</h6>
            </div>
            <div className="text-adxs">
              <span>Receipent Address</span>
              <h6>Old Garage way NY City</h6>
            </div>
            <div className="text-adxs">
              <span>PostCode</span>
              <h6>082830</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceBody;
