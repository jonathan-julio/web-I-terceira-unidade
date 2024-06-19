import React from 'react';
import './App.css';

import FooterComponet from './components/footerComponet';
import HeaderComponets from './components/headerComponets';
import { Outlet } from 'react-router-dom';
import { verificaRota } from './scripts/utils';

function App() {
  return (

    <div className="App ">
      {verificaRota() ? (null) : (<HeaderComponets />)}
      <Outlet />
      <FooterComponet />

    </div>

  );
}

export default App;

