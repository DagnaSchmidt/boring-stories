import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//actions
import { login } from '../../reducer/userReducer.js'
import { useDispatch } from 'react-redux';


const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      dispatch(login({"password": password}));
      setPassword('');
      navigate('/dashboard');
    } catch (exception) {
      //error handling here!!
      console.log('wrong credentials');
    }
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
