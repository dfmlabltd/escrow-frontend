import ContractHeader from "./Header";
import ContractSelect, { WalletSelectWidget } from "./Select";
import ContractInput from "./Input";
import ContractDescription from "./TextArea";
import ContractFoot from "./Footer";
// import ContractCheckbox from "./Checkbox";
import ContractToggle from "./Togglebutton";
import useContractCreate from "./useContractCreate";
import InvoiceAdd from "./Add";

function Contract() {
  const {
    state,
    setDepositorWallet,
    setTitle,
    setDescription,
    setBeneficiaryWallet,
    setAmount,
    setToken,
    createContractForm,
    createWalletWidget,
    depositor_wallet,
    wallets,
  } = useContractCreate();
  return state ? (
    <section className="w-full absolute inset-y-0 top-0 block min-h-screen max-h-screen backdrop-blur-sm bg-dashprimary/5">
      <div
        className="fixed h-screen w-[48rem] max-h-screen right-0 top-0 inset-y-0 overflow-y-auto z-50 font-adreg py-9 transition-transform duration-200 bg-dashsecondary px-9"
        aria-labelledby="Contract"
      >
        <div className="flex flex-col relative w-full gap-y-4">
          <ContractHeader />
          <ContractSelect setCurrentToken={setToken} />
          <ContractInput
            onChange={(e) => setTitle(e.target.value)}
            title="Title"
            placeholder="contract title"
          />
          <ContractInput
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            title="Amount"
            type="number"
            placeholder="contract amount"
            pattern="[0-9]{1,5}"
          />
          {wallets.length > 0 ? (
            <WalletSelectWidget
              title="Wallet"
              text="Select Wallet"
              onChange={setDepositorWallet}
              value={depositor_wallet}
              data={wallets}
            />
          ) : (
            <></>
          )}
          <a
            onClick={() => {
              createWalletWidget();
            }}
            href="#get"
          >
            <InvoiceAdd addtext="Add new wallwet" />
          </a>

          <ContractInput
            onChange={(e) => setBeneficiaryWallet(e.target.value)}
            title="Beneficiary"
            type="text"
            placeholder="Input email, payment id, or wallet address"
          />

          <ContractDescription
            onChange={(e) => setDescription(e.target.value)}
          />
          <ContractToggle title="Advance settings" />
          <hr className="border-t-[0.01rem] border-secondary overflow-visible mt-6"></hr>
          <ContractFoot
            draft={() => {
              createContractForm(true);
            }}
            publish={() => {
              createContractForm(false);
            }}
          />
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default Contract;
