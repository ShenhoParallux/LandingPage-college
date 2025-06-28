import "./Input.scss";
import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import * as React from "react";

interface InputProps {
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  label: string;
  value: string;
  change: ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type,
  label,
  value,
  change,
}) => {
  return (
    <div className={"input"}>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <input
        className={"input__main"}
        type={type}
        placeholder={placeholder}
        required={true}
        id={id}
        name={id}
        value={value}
        onChange={change}
      />
    </div>
  );
};
