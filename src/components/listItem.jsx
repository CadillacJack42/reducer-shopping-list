import { useData } from '../hooks/useData';

export const ListItem = ({ item }) => {
  const { handleEdit, handleDelete } = useData();
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
      {item.item}
      <button type="button" onClick={() => handleDelete(item.id)}>
        Delete Item
      </button>
    </>
  );
};
