import React from "react";
import "./FormInput.css";
import { Input } from "./Input";
export const FormInput = ({ value, inputType, labelText, id, onChange }) => {
  return (
    <div className="form-input">
      <label htmlFor={id}>{labelText}</label>
      <Input type={inputType} id={id} value={value} onChange={onChange} />
    </div>
  );
};
