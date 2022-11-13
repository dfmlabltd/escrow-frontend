interface LabelProps {
  text: string;
  label: string;
}

const Label: React.FC<LabelProps> = ({ text, label }: LabelProps) => {
  return (
    <label
      className="hidden mb-2 text-base font-medium text-white"
      aria-labelledby={label}
    >
      {text}
    </label>
  );
};

export default Label;
