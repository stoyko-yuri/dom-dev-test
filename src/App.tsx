import React from "react";
import GlobalStyled from "./assets/styles/Global.styled";
import { NewTodoForm } from "./components/Forms";
import { TodosList } from "./components/Lists";
import { MainLayout } from "./layouts";
import { ITodoItem } from "./types";

const someTodos: ITodoItem[] = [
  {
    _id: "123sad12",
    isCompleted: true,
    task: "buy a milk",
  },
  {
    _id: "321dsa12",
    isCompleted: false,
    task: "drink a milk",
  },
];

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyled />
      <MainLayout>
        <NewTodoForm />
        <TodosList todos={someTodos} />
      </MainLayout>
    </>
  );
};
