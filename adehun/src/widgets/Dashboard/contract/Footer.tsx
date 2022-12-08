interface Props {
  draft(): void;
  publish(): void;
}

const InvoiceFoot: React.FC<Props> = ({ draft, publish }: Props) => {
  return (
    <div className="relative items-center w-full mx-auto flex flex-row justify-between text-white text-adbase mt-2 py-2">
      <p className="uppercase py-1.5 border border-none">Preview</p>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          onClick={() => {
            draft();
          }}
          className="uppercase px-4 py-1.5 border border-secondary rounded-sm"
        >
          Save as draft
        </button>
        <button
          type="submit"
          onClick={() => {
            publish();
          }}
          className="uppercase px-4 py-1.5 border-none bg-secondary rounded-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default InvoiceFoot;
