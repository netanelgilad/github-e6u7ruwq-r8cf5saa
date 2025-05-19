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

export function PendingTasksCounter(props: { storeId: string }) {
  const theStore = getStore(props.storeId);
  const totalCount = theStore ? useStore(theStore.totalCount) : 0;
  return <div>Pending Tasks: {totalCount}</div>;
}
