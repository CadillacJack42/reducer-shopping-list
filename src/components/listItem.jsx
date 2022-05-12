import { useData } from '../hooks/useData';
import { useState } from 'react';

export const ListItem = ({ item }) => {
  const { handleEdit, handleDelete } = useData();
  const [editing, setEditing] = useState(false);

  let display;

  if (editing) {
    display = (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEditing(false);
        }}
      >
        <input
          value={item.item}
          onChange={(e) => {
            handleEdit({
              ...item,
              item: e.target.value,
            });
          }}
        />
        <button type="submit">Save</button>
      </form>
    );
  } else {
    display = (
      <>
        <p>{item.item}</p>
        <button type="button" onClick={() => setEditing(true)}>
          Edit Item
        </button>
      </>
    );
  }
  return (
    <>
      <input
        type="checkbox"
        checked={item.puchased}
        onChange={(e) => {
          handleEdit({
            ...item,
            purchased: e.target.checked,
          });
        }}
      ></input>
      {display}
      <button type="button" onClick={() => handleDelete(item.id)}>
        Delete Item
      </button>
    </>
  );
};
