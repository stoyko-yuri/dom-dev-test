import { todosSlice } from "./todosSlice/index";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  [todosSlice.name]: todosSlice.reducer,
});

export default reducers;
