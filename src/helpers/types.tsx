import { AppDispatch } from "../redux/store";

export type DispatchFunc = () => AppDispatch;

export type TodoItem = {
  id: string;
  title: string;
  description: string;
  status: boolean;
};

export type EventTargetType = {
  title: { value: string };
  description: { value: string };
};
