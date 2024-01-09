import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import AddStory from './AddStory';
import EditStory from './EditStory';
import DeleteStory from './DeleteStory';

const AdminDashboard = () => {
    const navigate = useNavigate();
    //display only after login

    const handleLogout = () => {
        //backend logout functions
        navigate('/');
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
}

export default AdminDashboard;
