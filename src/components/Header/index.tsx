import React from "react";
import { HeaderWrapper, HeaderTitle } from "./Header.styled";

interface HeaderProps {
  todosQty: number;
}

export const Header: React.FC<HeaderProps> = ({ todosQty }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Todos: {todosQty}</HeaderTitle>
    </HeaderWrapper>
  );
};
