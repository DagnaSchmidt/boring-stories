import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { toggleMenu } from '../reducer/menuReducer';

const ToggleMenuButton = () => {
    const menu = useSelector(state => state.menu);
    const dispatch = useDispatch();

  return (
    <button className='pz-4 absolute lg:right-24 md:right-12 right-8 top-10 z-50' onClick={() =>dispatch(toggleMenu())}>
        <p className='synonym text-xl font-medium tracking-wider'>
            {menu.open ? 'close' : menu.page === 'home' ? 'start here' : 'menu'}
        </p>
    </button>
  )
}

export default ToggleMenuButton;