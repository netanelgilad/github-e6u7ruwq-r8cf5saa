import { atom, computed } from "nanostores";

export type Todo = {
  id: string;
  text: string;
};

export function initTodosStore(id: string) {
  return {
    todos: [
      {
        id: "1",
      },
    ],
  };
}

export function hydrateTodosStore(id: string, data: { todos: Todo[] }) {
  const todos = atom<Todo[]>(data.todos);
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
