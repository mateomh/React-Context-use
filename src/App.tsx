import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route path='/'></Route>
        <Route path='/cart'></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
