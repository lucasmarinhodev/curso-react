import React from 'react';
import './App.css';
import NavBar from './components/nav';
import AppRouter from './components/route/index';


function App() {

  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;