type BaseInputProps<Props> = Props & {
  type: string;
  id: string;
  placeholder: string;
  onChange(e?: any): any;
};

type InputPropsWithClassName = {
  className: string;
};

const BaseInput: React.FC<BaseInputProps<InputPropsWithClassName>> = ({
  type,
  id,
  className,
  placeholder,
  onChange = () => {},
}) => {
  return (
    <input
      type={type}
      id={id}
      aria-describedby="helper-text-explanation"
      className={className}
      placeholder={placeholder}
      onInput={onChange}
    />
  );
};

const Input: React.FC<BaseInputProps<{}>> = ({
  type,
  id,
  placeholder,
  onChange = () => {},
}) => {
  return (
    <BaseInput
      type={type}
      id={id}
      onChange={onChange}
      aria-describedby="helper-text-explanation"
      className="bg-gray-800/40 focus:border text-white text-base rounded-md outline-none focus:ring-secondary focus:border-secondary block w-full px-6 py-5"
      placeholder={placeholder}
    />
  );
};

export default Input;
