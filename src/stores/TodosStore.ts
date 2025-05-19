import { atom, computed } from "nanostores";

export type Todo = {
  id: string;
  text: string;
};

export function createTodosStore(id: string) {
  const todos = atom<Todo[]>([]);
  const totalCount = computed(todos, (list) => list.length);

  const addTodo = (text: string) => {
    todos.set([...todos.get(), { id: crypto.randomUUID(), text }]);
  };

  const removeTodo = (todoId: string) => {
    todos.set(todos.get().filter((todo) => todo.id !== todoId));
  };

  return {
    // Getters
    todos,
    totalCount,

    // Actions
    addTodo,
    removeTodo,
  };
}
