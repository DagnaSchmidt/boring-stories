import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css';

//pages
import HomePage from './pages/HomePage';
import AdminLogin from './components/login/AdminLogin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/admin' element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
