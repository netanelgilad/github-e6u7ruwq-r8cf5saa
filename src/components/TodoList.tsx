import { getStore } from "../stores/StoreManager";
import * as React from "react";

// Minimal custom hook to subscribe to nanostores atom in React
function useStore(store) {
  const [value, setValue] = React.useState(store.get());
  React.useEffect(() => {
    return store.subscribe(setValue);
  }, [store]);
  return value;
}

export function TodoList(props: { storeId: string }) {
  const theStore = getStore(props.storeId);
  const todos = useStore(theStore.todos);
  const [input, setInput] = React.useState("");

  const handleAdd = () => {
    if (input.trim()) {
      theStore.addTodo(input.trim());
      setInput("");
    }
  };

  return (
    <div>
      <h3>Todo List {props.storeId}</h3>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => theStore.removeTodo(todo.id)}
              style={{ marginLeft: 8 }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
