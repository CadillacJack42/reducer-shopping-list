import { useData } from '../hooks/useData';

export const ListItem = ({ item }) => {
  const { handleEdit } = useData();
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
      <button>I'm A Button</button>
    </>
  );
};
