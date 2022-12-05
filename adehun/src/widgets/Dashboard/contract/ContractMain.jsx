import ContractHeader from "./Header";
import InputWidget from "./Input";
import InvoiceTextarea from "./TextArea";
import Togglebutton from "./Togglebutton";
import InvoiceFoot from "./Footer";

function ContractExpand() {
  return (
    <div className="relative w-9/12 p-4">
      <div className="w-full relative block">
        <div className="flex flex-col relative w-full gap-y-4">
          <ContractHeader />
          <div className="flex flex-row items-center justify-between gap-x-12">
            <div className="w-full">
              <InputWidget
                title="BlockChain Newtwork"
                type="text"
                placeholder="BlockChain Newtwork"
              />
            </div>
            <div className="w-full">
              <InputWidget
                title="Title"
                type="text"
                placeholder="Contract Title"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-x-12">
            <div className="w-full">
              <InputWidget title="Amount" type="number" placeholder="Amount" />
            </div>
            <div className="w-full">
              <InputWidget
                title="Wallet"
                type="text"
                placeholder="Contract Title"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-x-12">
            <div className="w-full">
              <InvoiceTextarea />
            </div>
          </div>
          <div>
            <Togglebutton title="Advance Settings" />
            <hr className="border-t-[0.1rem] border-secondary overflow-visible mt-6"></hr>
          </div>
          <InvoiceFoot />
        </div>
      </div>
      <div className="w w-16 h-16 bg-secondary rounded-full absolute -ri -right-20 bottom-[6.5rem] flex justify-center items-center">
        <div className="relative rounded-full">
          <svg
            className="w-7 h-7 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ msFilter: "" }}
            fill="currentColor"
            stroke="none"
          >
            <path d="M4 21a1 1 0 00.24 0l4-1a1 1 0 00.47-.26L21 7.41a2 2 0 000-2.82L19.42 3a2 2 0 00-2.83 0L4.3 15.29a1.06 1.06 0 00-.27.47l-1 4A1 1 0 003.76 21 1 1 0 004 21zM18 4.41L19.59 6 18 7.59 16.42 6zM5.91 16.51L15 7.41 16.59 9l-9.1 9.1-2.11.52z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ContractExpand;
