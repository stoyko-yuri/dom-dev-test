import styled from "styled-components";

export const InputWrapper = styled.input`
  padding: 0 14px;
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "100%"};
`;
