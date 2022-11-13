import React from "react";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className="bg-gray-800/40 focus:border text-white text-base rounded-md outline-none focus:ring-secondary focus:border-secondary block w-full px-6 py-5"
    />
  );
};

export default Input;
