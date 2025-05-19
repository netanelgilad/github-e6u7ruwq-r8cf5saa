export function createTodosStore(id: string) {
  return {
    hello() {
      alert('hello' + id);
    },
  };
}
