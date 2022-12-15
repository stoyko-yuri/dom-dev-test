import React from "react";
import { Header } from "../../components/Header";
import { LayoutStyled, WrapperStyled } from "./MainLayout.styled";

interface LayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutStyled>
      <Header todosQty={0} />
      <WrapperStyled>{children}</WrapperStyled>
    </LayoutStyled>
  );
};
