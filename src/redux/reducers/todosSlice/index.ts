import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoItem } from "../../../types";

interface ITodosState {
  todos: ITodoItem[];
}

const initialState: ITodosState = {
  todos: JSON.parse(window.localStorage.getItem("todos")!) || [],
};

export const todosSlice = createSlice({
  name: "todosSlice",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo: ITodoItem = {
        _id: String(Date.now()),
        task: action.payload,
        isCompleted: false,
      };

      state.todos.push(todo);

      window.localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo: (state, action: PayloadAction<{ _id: string; task: string }>) => {
      state.todos = state.todos.filter((todo) => {
        if (todo._id === action.payload._id) todo.task = action.payload.task;
        return todo;
      });

      window.localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);

      window.localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => {
        if (todo._id === action.payload) todo.isCompleted = !todo.isCompleted;
        return todo;
      });

      window.localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, editTodo, removeTodo, toggleCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
