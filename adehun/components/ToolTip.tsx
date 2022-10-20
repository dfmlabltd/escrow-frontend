interface LabelProps {
  text: string;
  label: string;
}

const ToolTip: React.FC<LabelProps> = ({ text, label }: LabelProps) => {
  return (
    <>
      <div
        id={label}
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        {text}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};

export default ToolTip;
