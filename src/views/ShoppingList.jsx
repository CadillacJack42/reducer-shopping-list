import { useData } from '../hooks/useData';

export const ShoppingList = () => {
  const { list } = useData();
  return (
    <>
      <ol>
        {list.map((item) => {
          return <li key={item.id}>{item.item}</li>;
        })}
      </ol>
    </>
  );
};
