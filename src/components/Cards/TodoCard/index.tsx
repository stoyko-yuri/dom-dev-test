import React from "react";
import { ITodoItem } from "../../../types";
import { Button, Input } from "../../UI";
import {
  TodoCardControls,
  TodoCardTitle,
  TodoCardWrapper,
} from "./TodoCard.styled";
import { BiEdit, BiTrash } from "react-icons/bi";

interface TodoCardProps {
  todo: ITodoItem;
  isEven: boolean;
}

export const TodoCard: React.FC<TodoCardProps> = ({ todo, isEven }) => {
  return (
    <TodoCardWrapper isEven={isEven}>
      <Input type="checkbox" width="auto" checked={todo.isCompleted} />
      <TodoCardTitle isCompleted={todo.isCompleted}>{todo.task}</TodoCardTitle>
      <TodoCardControls>
        <Button buttonType="edit">
          <BiEdit />
        </Button>
        <Button buttonType="remove">
          <BiTrash />
        </Button>
      </TodoCardControls>
    </TodoCardWrapper>
  );
};
