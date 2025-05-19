const storeMap = new Map<string, unknown>();

export function addStore(storeId: string, something: unknown) {
  storeMap.set(storeId, something);
}

export function getStore(storeId: string) {
  return storeMap.get(storeId);
}
