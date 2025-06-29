import "./Input.scss";
import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import * as React from "react";
import { IMaskInput } from "react-imask";

interface InputProps {
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  label: string;
  value: string;
  change: ChangeEventHandler<HTMLInputElement>;
  mask?: boolean;
}

export const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  type,
  label,
  value,
  change,
  mask,
}) => {
  return (
    <div className={"input"}>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      {mask ? (
        <IMaskInput
          className={"input__main"}
          type={type}
          placeholder={placeholder}
          required={true}
          id={id}
          name={id}
          value={value}
          onChange={change}
          mask={"+0(000)000-00-00"}
          placeholderChar={"_"}
        />
      ) : (
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
      )}
    </div>
  );
};
