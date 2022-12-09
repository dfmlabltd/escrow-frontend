import React from "react";

export type ReactHTMLInputEvent = React.ChangeEvent<HTMLInputElement>;
export type ReactHTMLButtonEvent = React.MouseEvent<HTMLButtonElement>;
export type ReactHTMLSpanEvent = React.MouseEvent<HTMLSpanElement>;
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {}

export type ReactHTMLSelectEvent = React.ChangeEvent<HTMLSelectElement>;

export interface ReactTextAreaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "className"
  > {}

export type TypelessInputProps = Omit<InputProps, "type">;

export type ReactTextAreaEvent = React.ChangeEvent<HTMLTextAreaElement>;