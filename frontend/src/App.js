import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css';

//pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}

export default App;
