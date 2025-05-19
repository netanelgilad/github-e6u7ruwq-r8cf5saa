import { atom, computed } from "nanostores";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export function createTodosStore(id: string) {
  // Atom to hold the list of todos
  const todos = atom<Todo[]>([]);

  // Actions
  function addTodo(text: string) {
    todos.set([
      ...todos.get(),
      { id: crypto.randomUUID(), text, completed: false },
    ]);
  }

  function removeTodo(todoId: string) {
    todos.set(todos.get().filter((todo) => todo.id !== todoId));
  }

  function toggleTodo(todoId: string) {
    todos.set(
      todos
        .get()
        .map((todo) =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
    );
  }

  // Getters
  const completedCount = computed(
    todos,
    (list) => list.filter((todo) => todo.completed).length
  );

  const totalCount = computed(todos, (list) => list.length);

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    completedCount,
    totalCount,
  };
}
