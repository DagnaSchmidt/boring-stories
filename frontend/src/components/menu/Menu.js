import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//components
import SubMenu from './SubMenu';

//actions
import { switchSelected, switchSort, closeMenu } from '../../reducer/menuReducer';
import { updateReducerActiveStory } from '../../reducer/storyReducer';


const Menu = () => {
    const menu = useSelector(state => state.menu);

    const dispatch = useDispatch();

    const handleDisplayRandomStory = () => {
        dispatch(closeMenu());
        dispatch(updateReducerActiveStory());
        dispatch(switchSelected('none'));
        dispatch(switchSort('date'));
    }

    const handleDisplayNew = () => {
        if(menu.selected === 'new'){
            dispatch(switchSelected('none'));
        }else{
            dispatch(switchSelected('new'));
        }
    }

    const handleDisplayAll = () => {
        if(menu.selected === 'all'){
            dispatch(switchSelected('none'));
        }else{
            dispatch(switchSelected('all'));
        }
    }

  return (
    <ul className='h-full flex flex-col justify-center align-middle gap-20'>
        <li className={menu.selected === 'new' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}>
            <button className='w-full' onClick={handleDisplayNew} >
                <p className='amulya text-center text-xl font-medium'>new stories</p>
            </button>
        </li>
        <li className={menu.selected === 'all' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}>
            <button className='w-full' onClick={handleDisplayAll} >
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
