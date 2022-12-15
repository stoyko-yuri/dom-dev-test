import React from "react";
import GlobalStyled from "./assets/styles/Global.styled";
import { NewTodoForm } from "./components/Forms";
import { TodosList } from "./components/Lists";
import { MainLayout } from "./layouts";
import { useAppSelector } from "./redux/hooks";

export const App: React.FC = () => {
  const { todos } = useAppSelector((state) => state.todosSlice);

  return (
    <>
      <GlobalStyled />
      <MainLayout>
        <NewTodoForm />
        <TodosList todos={todos} />
      </MainLayout>
    </>
  );
};
