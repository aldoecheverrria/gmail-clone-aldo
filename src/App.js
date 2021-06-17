import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <Sidebar/>
      <h1>Este será el clon de Gmail</h1>
    </div>
  );
}

export default App;
