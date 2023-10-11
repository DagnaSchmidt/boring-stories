import React from 'react';
import { useSelector } from 'react-redux';

const ToggleMenuButton = () => {
    const menu = useSelector(state => state.menu);

  return (
    <button className='pz-4 absolute lg:right-24 md:right-9 right-6 top-10'>
        <p className='synonym text-xl font-medium tracking-wider'>
            {menu.open ? 'close' : menu.page === 'home' ? 'start here' : 'menu'}
        </p>
    </button>
  )
}

export default ToggleMenuButton;