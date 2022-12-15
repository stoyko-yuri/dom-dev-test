import React from "react";
import { ButtonWrapper } from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: "default" | "save" | "edit" | "remove";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  ...props
}) => {
  return (
    <ButtonWrapper buttonType={buttonType} {...props}>
      {children}
    </ButtonWrapper>
  );
};
