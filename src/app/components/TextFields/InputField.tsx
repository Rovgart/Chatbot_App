import React, { HTMLInputTypeAttribute } from "react";

type InputFieldProps = {
  className?: string;
  type: HTMLInputTypeAttribute;
  nameProp?: string;
  idProp?: string;
};

const InputField = ({ className, type, nameProp, idProp }: InputFieldProps) => {
  return (
    <input
      id={idProp}
      name={nameProp}
      type={type}
      className={className}
      required
    ></input>
  );
};

export default InputField;
