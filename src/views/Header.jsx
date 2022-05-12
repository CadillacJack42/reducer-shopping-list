import { useData } from '../hooks/useData';

export const Header = () => {
  const { list, handleClear } = useData();
  return (
    <>
      <h1>Welcome to Cadillac Jacks Reducer Shopping List</h1>
      <h4>Items in cart: {list.length}</h4>
      <button
        type="button"
        aria-label="clear-list-button"
        onClick={() => handleClear()}
      >
        Clear Shopping List
      </button>
    </>
  );
};
