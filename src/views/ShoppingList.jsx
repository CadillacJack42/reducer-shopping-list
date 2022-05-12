import { useState } from 'react';
import { useData } from '../hooks/useData';
import { ListItem } from '../components/ListItem.jsx';

export const ShoppingList = () => {
  const [newItem, setNewItem] = useState('');
  const { list, handleAdd } = useData();
  return (
    <>
      <form
        aria-label="add-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd(newItem);
          setNewItem('');
        }}
      >
        <label htmlFor="add">
          Add Item to Shopping List:{' '}
          <input
            aria-label="add-input"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </label>
        <button aria-label="add-submit-button">Add Item</button>
      </form>
      <ol>
        {list.map((item) => {
          return (
            <li key={item.id} style={{ listStyleType: 'none' }}>
              <ListItem itemObj={item} />
            </li>
          );
        })}
      </ol>
    </>
  );
};
