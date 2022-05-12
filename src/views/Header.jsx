import { useData } from '../hooks/useData';

export const Header = () => {
  const { list } = useData();
  return (
    <>
      <h1>Welcome to Cadillac Jacks Reducer Shopping List</h1>
      <h3>Items in cart: {list.length}</h3>
    </>
  );
};
