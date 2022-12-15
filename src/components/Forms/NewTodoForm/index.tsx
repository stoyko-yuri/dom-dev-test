import React, { FormEvent, useState } from "react";
import { FormWrapper } from "./NewTodo.styled";
import { Button, Input } from "../../UI";
import { useAppDispatch } from "../../../redux/hooks";
import { addTodo } from "../../../redux/reducers/todosSlice";

export const NewTodoForm: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(inputText));
    setInputText("");
  };

  return (
    <FormWrapper onSubmit={(e) => handleSubmit(e)}>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputText(e.target.value)
        }
        value={inputText}
        placeholder="Enter todo here"
      />
      <Button type="submit" buttonType="default">
        Submit
      </Button>
    </FormWrapper>
  );
};
