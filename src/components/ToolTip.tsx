import React from "react";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface ToolTipProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "className"
  > {
  children: React.ReactNode;
}

const ToolTip: React.FC<ToolTipProps> = ({ children, ...others }) => {
  return (
    <>
      <div
        {...others}
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        {children}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};

export default ToolTip;
