import { useData } from '../hooks/useData';
import { useState } from 'react';

export const ListItem = ({ item }) => {
  const { handleEdit, handleDelete } = useData();
  const [editing, setEditing] = useState(false);

  let display;

  if (editing) {
    display = (
      <form
        aria-label="edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          setEditing(false);
        }}
      >
        <input
          aria-label="edit-form-input"
          value={item.item}
          onChange={(e) => {
            handleEdit({
              ...item,
              item: e.target.value,
            });
          }}
        />
        <button aria-label="edit-form-button" type="submit">
          Save
        </button>
      </form>
    );
  } else {
    display = (
      <>
        <p aria-label="item-name">{item.item}</p>
        <button
          aria-label="begin-edit-button"
          type="button"
          onClick={() => setEditing(true)}
        >
          Edit Item
        </button>
      </>
    );
  }
  return (
    <>
      <input
        aria-label="item-checkbox"
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
      <button
        aria-label="delete-item-button"
        type="button"
        onClick={() => handleDelete(item.id)}
      >
        Delete Item
      </button>
    </>
  );
};
