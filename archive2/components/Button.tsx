type BaseButtonProps<Props> = Props & {
  label: string;
  text: string;
  onClick?(e?: any): any;
};

type ButtonPropsWithClassName = {
  className: string;
};

export const BaseButton: React.FC<
  BaseButtonProps<ButtonPropsWithClassName>
> = ({ text, label, className, onClick = () => {} }) => {
  return (
    <button className={className} onClick={onClick} aria-label={label}>
      {text}
    </button>
  );
};

const Button: React.FC<BaseButtonProps<{}>> = ({
  text,
  label,
  onClick = () => {},
}) => {
  return (
    <BaseButton
      label={label}
      onClick={onClick}
      text={text}
      className="bg-secondary focus:border text-white text-base rounded-md outline-none block w-full p-4"
    />
  );
};

export const GradientButton1: React.FC<BaseButtonProps<{}>> = ({
  text,
  label,
  onClick = () => {},
}) => {
  return (
    <BaseButton
      label={label}
      onClick={onClick}
      text={text}
      className="buttonAuth border text-white rounded-md outline-none block w-full p-4"
    />
  );
};

export default Button;
