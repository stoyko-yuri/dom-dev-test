import styled, { css } from "styled-components";

interface ButtonProps {
  buttonType: string;
  width?: string;
  height?: string;
}

export const ButtonWrapper = styled.button<ButtonProps>`
  padding: 6px;
  width: ${(props) => props.width ?? "fit-content"};
  height: ${(props) => props.height ?? "100%"};
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    switch (props.buttonType) {
      case "remove":
        return css`
          background-color: #d63e3e;
        `;
      case "edit":
        return css`
          background-color: #34c239;
        `;
      default:
        return css`
          padding: 0px 20px;
          background-color: #3e60d6;
        `;
    }
  }}

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;
