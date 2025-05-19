import { atom } from 'nanostores'
import { addStore } from '../../stores/StoreManager';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export function createTodosStore(storeId: string, initialTodos: Todo[]) {
  const $todos = atom<Todo[]>(initialTodos);
  const theStore = {
    $todos,
    addTodo(todo: Todo) {
      $todos.set([...$todos.get(), todo]);
    },
    removeTodo(id: string) {
      $todos.set($todos.get().filter((todo) => todo.id !== id));
    },
  };
  addStore(storeId, theStore);
  return storeId;
}

export async function getInitialTodos() {
  return [
    {
      id: "1",
      title: "Buy groceries",
      completed: false,
    },
    {
      id: "2",
      title: "Buy groceries",
      completed: false,
    },
  ];
}

