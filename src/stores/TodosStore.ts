import { atom } from 'nanostores'

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export function createTodosStore(id: string) {
  const $todos = atom<Todo[]>([])
  return {
    $todos,
    addTodo(todo: Todo) {
      $todos.set([...$todos.get(), todo]);
    },
    removeTodo(id: string) {
      $todos.set($todos.get().filter((todo) => todo.id !== id));
    },
  };
}
