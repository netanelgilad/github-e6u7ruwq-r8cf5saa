export function addStore(storeId: string, something: unknown) {
  globalThis['stores'] = globalThis['stores'] ?? {};
  globalThis['stores'][storeId] = something;
}

export function getStore(storeId: string) {
  return globalThis['stores']?.[storeId];
}
