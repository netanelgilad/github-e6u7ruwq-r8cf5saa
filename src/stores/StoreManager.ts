import { createTodosStore } from "./TodosStore";

export function addStore(storeId: string, something: unknown) {
  globalThis['stores'] = globalThis['stores'] ?? {};
  globalThis['stores'][storeId] = something;
}

export function getStore(storeId: string) {
  const store = globalThis['stores']?.[storeId];
  if (!store) {
    addStore(storeId, createTodosStore(storeId));
  }
  return globalThis['stores'][storeId];
}
