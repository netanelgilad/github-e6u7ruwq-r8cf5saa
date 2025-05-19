import { getStore } from "../stores/StoreManager";
import { useStore } from "@nanostores/react";
import * as React from "react";

export function PendingTasksCounter(props: { store: any }) {
  const theStore = props.store;
  const totalCount = theStore ? useStore(theStore.totalCount) : 0;
  return <div>Pending Tasks: {totalCount}</div>;
}
