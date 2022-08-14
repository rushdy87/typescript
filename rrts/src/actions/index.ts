import axios from "axios";
import { Dispatch } from 'redux';

import { ActionsTypes } from './types'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosAction {
  type: ActionsTypes.fetchTodos;
  payload: Todo[];
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