import { Route, Switch } from 'react-router-dom';
import { Header } from './views/Header';
import { ShoppingList } from './views/ShoppingList';

export default function App() {
  return (
    <>
      <Header />
      <ShoppingList />
    </>
  );
}
