import React, { useState } from "react";
import { ITodoItem } from "../../../types";
import { Button, Input } from "../../UI";
import {
  TodoCardControls,
  TodoCardEdit,
  TodoCardTitle,
  TodoCardWrapper,
} from "./TodoCard.styled";
import { BiEdit, BiSave, BiTrash } from "react-icons/bi";
import { useAppDispatch } from "../../../redux/hooks";
import {
  editTodo,
  removeTodo,
  toggleCompleted,
} from "../../../redux/reducers/todosSlice";

interface TodoCardProps {
  todo: ITodoItem;
  isEven: boolean;
}

export const TodoCard: React.FC<TodoCardProps> = ({ todo, isEven }) => {
  const [inputText, setInputText] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const saveEditTodo = () => {
    const newTodo = { _id: todo._id, task: inputText };

    dispatch(editTodo(newTodo));

    setIsEdit(false);
    setInputText("");
  };

  const toggleEdit = () => {
    setInputText("");
    setIsEdit((prev) => !prev);
  };

  return (
    <>
      <TodoCardWrapper isEven={isEven}>
        <Input
          type="checkbox"
          width="auto"
          onClick={() => dispatch(toggleCompleted(todo._id))}
          defaultChecked={todo.isCompleted}
        />
        {isEdit ? (
          <TodoCardEdit>
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputText(e.target.value)
              }
              value={inputText}
              placeholder="Enter new todo here"
            />
          </TodoCardEdit>
        ) : (
          <TodoCardTitle isCompleted={todo.isCompleted}>
            {todo.task}
          </TodoCardTitle>
        )}
        <TodoCardControls>
          {isEdit && (
            <Button buttonType="save" onClick={() => saveEditTodo()}>
              <BiSave />
            </Button>
          )}
          <Button buttonType="edit" onClick={() => toggleEdit()}>
            <BiEdit />
          </Button>
          <Button
            buttonType="remove"
            onClick={() => dispatch(removeTodo(todo._id))}
          >
            <BiTrash />
          </Button>
        </TodoCardControls>
      </TodoCardWrapper>
    </>
  );
};
