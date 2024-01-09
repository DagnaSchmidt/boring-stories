import React from 'react';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    //login backend functions
    navigate('/admin/dashboard');
  }


  return (
    <div className='bg-primary w-full h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-4 items-center'>
        <input />
        <button onClick={handleLogin}>
          <p className='synonym text-xl font-medium tracking-wider'>login</p>
        </button>
      </div>
    </div>
  )
}

export default AdminLogin;
