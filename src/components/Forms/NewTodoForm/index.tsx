import React, { useState } from "react";
import { FormWrapper } from "./NewTodo.styled";
import { Button, Input } from "../../UI";

export const NewTodoForm: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");

  return (
    <FormWrapper>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputText(e.target.value)
        }
        placeholder="Enter todo here"
      />
      <Button type="button" buttonType="default">
        Submit
      </Button>
    </FormWrapper>
  );
};
