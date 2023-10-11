import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { switchSelected, switchPage, switchSort } from '../../reducer/menuReducer';
import { toggleMenu } from '../../reducer/menuReducer';
import SubMenu from './SubMenu';

const Menu = () => {
    const menu = useSelector(state => state.menu);
    const dispatch = useDispatch();
    console.log(menu);

    const handleDisplayRandomStory = () => {
        dispatch(toggleMenu());
        dispatch(switchSelected('none'));
        dispatch(switchSort('date'));
        dispatch(switchPage('story'));
    }

  return (
    <div className={!menu.open ?
        'bg-primary w-2 h-2 border-4 border-secondary absolute lg:right-20 md:right-8 right-4 top-[3.35rem]'
        :
        'bg-primary w-[19rem] max-md:w-full h-full border-4 border-secondary absolute lg:right-20 md:right-8 right-0 top-0 z-40 flex justify-center content-center'
        }>

        {
            menu.open &&
            <ul className='flex flex-col justify-center align-middle gap-20'>
                <li className={menu.selected === 'all' && 'opacity-30 hover:opacity-70'}>
                    <button className='w-full' onClick={() => dispatch(switchSelected('new'))} disabled={menu.selected === 'new' && true}>
                        <p className='amulya text-center text-xl font-medium'>new stories</p>
                    </button>
                </li>
                <li className={menu.selected === 'new' && 'opacity-30 hover:opacity-70'}>
                    <button className='w-full' onClick={() => dispatch(switchSelected('all'))} disabled={menu.selected === 'all' && true}>
                        <p className='amulya text-center text-xl font-medium'>all stories</p>
                    </button>
                    {
                        menu.selected === 'all' &&
                            <SubMenu />
                    }
                </li>
                <li className={menu.selected !== 'none' && 'opacity-30 hover:opacity-70'}>
                    <button className='w-full' onClick={handleDisplayRandomStory}>
                        <p className='amulya text-center text-xl font-medium'>random story</p>
                    </button>
                </li>
            </ul>
        }
        
    </div>
  )
}

export default Menu;