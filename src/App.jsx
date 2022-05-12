import { DataProvider } from './context/DataProvider';
import { ShoppingList } from './views/ShoppingList';
import { Route, Switch } from 'react-router-dom';
import { Header } from './views/Header';

export default function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <ShoppingList />
      </DataProvider>
    </>
  );
}
