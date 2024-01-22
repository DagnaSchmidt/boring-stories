import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//components
import AddStory from './AddStory';
import EditStory from './EditStory';
import DeleteStory from './DeleteStory';

//actions
import { logout } from '../../reducer/userReducer';


const AdminDashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const admin = useSelector(state => state.user);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    if(admin === null){
      return null;
    }


  return (
    <div className='bg-primary w-full min-h-screen flex flex-col lg:flex-row lg:justify-center items-center gap-8'>
        <button onClick={handleLogout}>
            <p className='synonym text-xl font-medium tracking-wider py-4'>logout</p>
        </button>
        <AddStory />
        <EditStory />
        <DeleteStory />
    </div>
  )
};

export default AdminDashboard;
