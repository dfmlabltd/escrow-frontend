import React from "react";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...others }) => {
  return (
    <button
      {...others}
      className="bg-secondary focus:border text-white text-base rounded-md outline-none block w-full p-4"
    >
      {children}
    </button>
  );
};

export const GradientButton: React.FC<ButtonProps> = ({
  children,
  ...others
}) => {
  return (
    <button
      {...others}
      className="buttonAuth border text-white rounded-md outline-none block w-full p-4"
    >
      {children}
    </button>
  );
};

export default Button;
