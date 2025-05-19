import { TodoList } from './TodoList';
import { PendingTasksCounter } from './PendingTasksCounter';
import { createTodosStore } from '../stores/TodosStore';

const todosStore = createTodosStore();
export const Connected = {
  TodosList: connectToStore(TodoList, todosStore),
  PendingTasksCounter: connectToStore(PendingTasksCounter, todosStore),
};

const anotherTodoStore = createTodosStore();
export const Connected2 = {};
