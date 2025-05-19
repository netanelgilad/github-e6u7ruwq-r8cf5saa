import { getStore } from "../stores/StoreManager";
import { useStore } from "@nanostores/react";
import * as React from "react";

export function PendingTasksCounter(props: { storeId: string }) {
  const theStore = getStore(props.storeId);
  const totalCount = theStore ? useStore(theStore.totalCount) : 0;
  return <div>Pending Tasks: {totalCount}</div>;
}
