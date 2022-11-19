import React from "react";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface LabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "className"> {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, ...others }) => {
  return (
    <label {...others} className="hidden mb-2 text-base font-medium text-white">
      {children}
    </label>
  );
};

export default Label;
