import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionsTypes {
  fetchTodos = 'FETCH_TODOS',
  deleteTodo = 'DELETE_TODO'
};

export type Action = FetchTodosAction | DeleteTodoAction;