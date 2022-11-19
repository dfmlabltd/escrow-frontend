type BaseInputProps<Props> = Props & {
  type: string;
  id: string;
  placeholder: string;
  value?: string;
  autoFocus?: boolean;
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
  autoFocus,
  value,
  onChange = () => {},
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      autoFocus={autoFocus}
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
  value,
  autoFocus,
  onChange = () => {},
}) => {
  return (
    <BaseInput
      type={type}
      id={id}
      value={value}
      autoFocus={autoFocus}
      onChange={onChange}
      aria-describedby="helper-text-explanation"
      className="bg-gray-800/40 focus:border text-white text-base rounded-md outline-none focus:ring-secondary focus:border-secondary block w-full px-6 py-5"
      placeholder={placeholder}
    />
  );
};

export default Input;
