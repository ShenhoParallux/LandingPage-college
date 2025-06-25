import "./Input.scss";
import type { HTMLInputTypeAttribute } from "react";
import * as React from "react";

interface InputProps {
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

export const Input: React.FC<InputProps> = ({ id, placeholder, type }) => {
  return (
    <div className={"input"}>
      <label htmlFor={id} className="visually-hidden">
        {placeholder}
      </label>
      <input
        className={"input__main"}
        type={type}
        placeholder={placeholder}
        required={true}
      />
    </div>
  );
};
