import axios from "axios";
import { Dispatch } from 'redux';

import { ActionsTypes } from './types'

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionsTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionsTypes.deleteTodo;
  payload: number  //todo id
}

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(TODOS_URL);
    dispatch<FetchTodosAction>({
      type: ActionsTypes.fetchTodos,
      payload: response.data
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionsTypes.deleteTodo,
    payload: id
  };
};