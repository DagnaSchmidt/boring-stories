import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//components
import SubMenu from './SubMenu';

//actions
import { toggleMenu, switchSelected, switchPage, switchSort } from '../../reducer/menuReducer';


const Menu = () => {
    const menu = useSelector(state => state.menu);

    const dispatch = useDispatch();

    const handleDisplayRandomStory = () => {
        dispatch(toggleMenu());
        dispatch(switchSelected('none'));
        dispatch(switchSort('date'));
        dispatch(switchPage('story'));
    }

  return (
    <ul className='flex flex-col justify-center align-middle gap-20'>
        <li className={menu.selected === 'new' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}>
            <button className='w-full' onClick={() => dispatch(switchSelected('new'))} disabled={menu.selected === 'new' && true}>
                <p className='amulya text-center text-xl font-medium'>new stories</p>
            </button>
        </li>
        <li className={menu.selected === 'all' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}>
            <button className='w-full' onClick={() => dispatch(switchSelected('all'))} disabled={menu.selected === 'all' && true}>
                <p className='amulya text-center text-xl font-medium' >all stories</p>
            </button>
            {
                menu.selected === 'all' &&
                    <SubMenu />
            }
        </li>
        <li className='opacity-50 hover:opacity-100'>
            <button className='w-full' onClick={handleDisplayRandomStory}>
                <p className='amulya text-center text-xl font-medium'>random story</p>
            </button>
        </li>
            </ul>
  )
}

export default Menu;
