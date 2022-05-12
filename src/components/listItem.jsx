import { handleEdit } from '../context/DataProvider';

export const listItem = (item) => {
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
      {item}
      <button>I'm A Button</button>
    </>
  );
};
