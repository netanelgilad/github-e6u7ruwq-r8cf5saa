import { useStore } from "@nanostores/react";
import { getStore } from "../../stores/StoreManager";

export function PendingTasksCounter(props: { storeId: string }) {
  const store = getStore(props.storeId);
  const todos = useStore(store.$todos);
  return <div>Pending Tasks Counter: {todos.filter((todo: any) => !todo.completed).length}</div>;
}
