import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    //login backend functions
    navigate('/admin/dashboard');
  }


  return (
    <div className='bg-primary w-full h-screen flex justify-center items-center'>
      <form
        className='flex flex-col gap-4 items-center'
        onSubmit={handleLogin}
      >
        <input
          type='password'
          value={password}
          name='password'
          id='password'
          onChange={({target}) => setPassword(target.value)}
        />
        <button id='loginButton'>
          <p className='synonym text-xl font-medium tracking-wider'>login</p>
        </button>
      </form>
    </div>
  )
}

export default AdminLogin;
