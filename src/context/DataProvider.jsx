import { createContext, useReducer } from 'react';

let initialState = [
  {
    id: Date().now(),
    purchased: false,
    item: "I'm a shopping list item. Feel free to delete or edit me, and don't forget the milk!",
  },
];

const ListContext = createContext(null);

const listReducer = (state, action) => {
  switch (action.type) {
    case 'EDIT':
      return 'edited';
    case 'DELETE':
      return 'deleted';
    case 'ADD':
      return 'added';

    default:
      throw new Error('Unhandled action');
  }
};

export const DataProvider = ({ children }) => {
  const [list, dispatch] = useReducer(listReducer, initialState);

  const handleEdit = (item) => {
    dispatch({ type: 'EDIT', payload: { item } });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  const handleAdd = (newItem) => {
    dispatch({ type: 'ADD', payload: { newItem } });
  };

  return (
    <ListContext.Provider value={{ list, handleAdd, handleDelete, handleEdit }}>
      {children}
    </ListContext.Provider>
  );
};
