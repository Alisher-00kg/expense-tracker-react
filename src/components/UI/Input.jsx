import React from "react";
import "./Input.css";
import styled from "styled-components";
export const Input = ({ value, type, id, onChange, placeholder, ...rest }) => {
  return (
    <StyledInput
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      {...rest}
    />
  );
};
const StyledInput = styled.input`
  border: none;
`;
