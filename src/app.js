
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CardWidget from './components/CardWidget/CardWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <Navbar />
      <CardWidget />
      <ItemListContainer greeting="¡Bienvenido a TechHub!" />
    </div>
  );
};

export default App;
