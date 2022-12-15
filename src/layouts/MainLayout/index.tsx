import React from "react";
import { Header } from "../../components/Header";
import { useAppSelector } from "../../redux/hooks";
import { LayoutStyled, WrapperStyled } from "./MainLayout.styled";

interface LayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const { todos } = useAppSelector((state) => state.todosSlice);

  return (
    <LayoutStyled>
      <Header todosQty={todos.length} />
      <WrapperStyled>{children}</WrapperStyled>
    </LayoutStyled>
  );
};
