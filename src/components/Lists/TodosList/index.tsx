import React from "react";
import { ITodoItem } from "../../../types";
import { TodoCard } from "../../Cards";
import { TodoListWrapper } from "./TodosList.styled";

interface TodosListProps {
  todos: ITodoItem[];
}

export const TodosList: React.FC<TodosListProps> = ({ todos }) => {
  return (
    <TodoListWrapper>
      {todos.length
        ? todos.map((todo: ITodoItem, index) => (
            <TodoCard key={todo._id} todo={todo} isEven={index % 2 === 0} />
          ))
        : "Your todos list is empty"}
    </TodoListWrapper>
  );
};
