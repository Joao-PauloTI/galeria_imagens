import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Rotas from './rotas'
import MenuPrincipal from './Views/MenuPrincipal'

export default function App() {
  return (
    <div className="App">
      <MenuPrincipal />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </div>
  );
}
