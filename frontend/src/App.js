import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//styling
import './styles/index.css';

//pages
import HomePage from './pages/HomePage';
import AdminLogin from './components/login/AdminLogin';
import AdminDashboard from './components/login/AdminDashboard';

//actions
import { setAllStories } from './reducer/allStoriesReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllStories());
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/admin' element={<AdminLogin />} />
      <Route path='/dashboard' element={<AdminDashboard />} />
      <Route path='/*' element={<HomePage />} />
    </Routes>
  );
}

export default App;
