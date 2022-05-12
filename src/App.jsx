import { Route, Switch } from 'react-router-dom';
import { Header } from './views/Header';
import { ShoppingList } from './views/ShoppingList';
import { DataProvider } from './context/DataProvider';

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
