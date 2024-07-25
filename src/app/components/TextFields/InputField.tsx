import React, { HTMLInputTypeAttribute } from "react";

type InputFieldProps = {
  className?: string;
  type: HTMLInputTypeAttribute;
  nm?: string;
};

const InputField = ({ className, type, nm }: InputFieldProps) => {
  return <input name={nm} type={type} className={className} required></input>;
};

export default InputField;
