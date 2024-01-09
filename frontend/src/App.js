import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css';

//pages
import HomePage from './pages/HomePage';
import AdminLogin from './components/login/AdminLogin';
import AdminDashboard from './components/login/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/admin' element={<AdminLogin />} />
      <Route path='/admin/dashboard' element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
