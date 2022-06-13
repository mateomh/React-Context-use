import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import "./components/styles.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route 
          path='/'
          element={ <Home /> }
        />
        <Route 
          path='/cart'
          element={ <Cart /> }
        />
      </Routes>
    </>
  );
}

export default App;
