import { useData } from '../hooks/useData';
import { useState } from 'react';
import styles from './ListItem.css';

export const ListItem = ({ itemObj }) => {
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
          value={itemObj.item}
          onChange={(e) => {
            handleEdit({
              ...itemObj,
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
        <p aria-label="item-name">{itemObj.item}</p>
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
    <div className={styles['li-elements']}>
      <input
        aria-label="item-checkbox"
        type="checkbox"
        checked={itemObj.puchased}
        onChange={(e) => {
          handleEdit({
            ...itemObj,
            purchased: e.target.checked,
          });
        }}
      ></input>

      {display}
      <button
        aria-label="delete-item-button"
        type="button"
        onClick={() => handleDelete(itemObj.id)}
      >
        Delete Item
      </button>
    </div>
  );
};
