import { getStore } from '../stores/StoreManager';

export function TodoList(props: { storeId: string }) {
  const theStore = getStore(props.storeId);
  return (
    <div>
      Todo List {props.storeId}
      <button
        onClick={() => {
          console.log('button clicked');
          theStore.hello();
        }}
      >
        Hello
      </button>
    </div>
  );
}
