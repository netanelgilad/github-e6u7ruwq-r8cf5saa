export function addStore(storeId: string, something: unknown) {
  (globalThis as any).stores = (globalThis as any).stores ?? {};
  (globalThis as any).stores[storeId] = something;
}
export function getStore(storeId: string) {
  return (globalThis as any).stores?.[storeId];
}
