import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItem } from "../helpers/types";

const todosInitialState: { todos: TodoItem[] } = {
  todos: [
    {
      id: "1",
      title: "Варимо бульйон",
      description:
        "У каструлю наливаємо 1,5-2 літра води. Додаємо м’ясо й ставимо на середній вогонь. Перед закипанням знімаємо піну. Щойно бульйон закипить, накриваємо кришкою і варимо на повільному вогні годину-півтори.",
      status: true,
    },
    {
      id: "2",
      title: "Готуємо засмажку",
      description:
        "Чистимо буряк, моркву та цибулю. Буряк натираємо на крупній тертці, а моркву – на середній. Цибулю нарізаємо кубиками.На середньому вогні в сковороді розігріваємо олію, висипаємо туди цибулю та моркву, смажимо 5 хвилин. Потім додаємо буряк (його можна посипати лимонною кислотою або збризнути соком свіжого лимона – так борщ буде по-справжньому червоним). Смажимо овочі ще 5 хвилин, додаємо томатну пасту, перемішуємо й смажимо все ще 5-7 хвилин.",
      status: true,
    },
    {
      id: "3",
      title: "Варимо сам борщ",
      description:
        " З бульйону виймаємо м’ясо і, поки воно холоне, кидаємо в бульйон нашатковану капусту. Через 5-10 хвилин додаємо нарізану соломкою картоплю. Відокремлюємо м’ясо від кістки й нарізаємо кубиками. Повертаємо м’ясо в борщ, солимо його і додаємо засмажку. Перемішуємо борщ, кладемо лавровий лист і дрібно посічену зелень, накриваємо кришкою та варимо все ще 5-7 хвилин.",
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
        return {
          ...state,
          todos: [
            ...state.todos,
            { ...action.payload, id: (state.todos.length + 1).toString() },
          ],
        };
      },
      prepare(obj) {
        const { title, description } = obj;
        return {
          payload: {
            id: "",
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
