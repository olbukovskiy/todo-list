import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { TodoItem } from "../helpers/types";

const todosInitialState: { todos: TodoItem[] } = {
  todos: [
    {
      id: "0",
      title: "Learn HTML and CSS",
      description: "dqwdqwdqwdqw",
      status: true,
    },
    {
      id: "1",
      title: "Get good at JavaScript",
      description: "dqwdqwdqwdqw",
      status: true,
    },
    {
      id: "2",
      title: "Master React",
      description: "dqwdqwddqdqwdqwdqwdqwdqwdqw",
      status: false,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todosSlice",
  initialState: todosInitialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<TodoItem>) {
        state.todos.push(action.payload);
      },
      prepare(obj) {
        const { title, description } = obj;
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            status: false,
          },
        };
      },
    },

    toggleStatus(state, action: PayloadAction<string>) {
      for (const todo of state.todos) {
        if (todo.id === action.payload) {
          todo.status = !todo.status;
          break;
        }
      }
    },
  },
});

export const { addTask, toggleStatus } = todosSlice.actions;
