import { getStore } from '../stores/StoreManager';
import { useStore } from '@nanostores/react'
import type { Todo } from '../stores/TodosStore';

function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function generateRandomTask() {
  const verbs = ['Buy', 'Do', 'Perform']
  const nouns = ['groceries', 'laundry', 'exercise']
  return `${verbs[Math.floor(Math.random() * verbs.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`
}

export function TodoList(props: { storeId: string }) {
  const todosStore = getStore(props.storeId);
  const todos = useStore(todosStore.$todos);

  return (
    <>
      <button onClick={() => todosStore.addTodo({ id: generateId(), title: generateRandomTask(), completed: false })}>Add Todo</button>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.title} <button onClick={() => todosStore.removeTodo(todo.id)}>Remove</button></li>
        ))}
      </ul>
    </>
  );
}
