import React from "react";
import { InputWrapper } from "./Input.styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return <InputWrapper {...props} />;
};
