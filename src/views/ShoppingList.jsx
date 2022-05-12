import { useData } from '../hooks/useData';
import { ListItem } from '../components/listItem';

export const ShoppingList = () => {
  const { list } = useData();
  return (
    <>
      <ol>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <ListItem item={item} />
            </li>
          );
        })}
      </ol>
    </>
  );
};
