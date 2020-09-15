import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropsFunction from './components/PropsFunction';
import StateClass from './components/StateClass';
import HookState from './components/HookState';

function App() {
  const algo = {name: 'Daniel', apellido:'Zamarron'}
  return (
    <div className="App">
      <PropsFunction algo={algo} red='#ff0000' name='Claudia' apellido='Hernandez' />
      <StateClass />
      <HookState/>
    </div>
  );
}

export default App;
