import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { toggleMenu } from '../../reducer/menuReducer';

const MenuButton = () => {
    const menu = useSelector(state => state.menu);

    const dispatch = useDispatch();


  return (
    <button
        onClick={() => dispatch(toggleMenu())}
        className={`absolute ${menu.open ? 'top-4 right-4' : 'top-[-16px] right-4 w-28'}`}
    >

            <p className='synonym text-xl font-medium tracking-wider'>
                {menu.open ? 'close' : menu.page === 'home' ? 'start here' : 'menu'}
            </p>

    </button>
  )
}

export default MenuButton;
