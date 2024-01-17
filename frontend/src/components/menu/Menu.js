import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { switchSelected, switchSort, closeMenu } from '../../reducer/menuReducer';
import { setActiveStory } from '../../reducer/activeStoryReducer';

//hooks
import useDeviceWidth from '../../hooks/useDeviceWidth';


const Menu = () => {
    const menu = useSelector(state => state.menu);
    const allStories = useSelector(state => state.allStories);
    const amountOfStories = allStories.length;

    const deviceWidth = useDeviceWidth();

    const dispatch = useDispatch();

    const handleDisplayRandomStory = () => {
        const randomNumber = Math.floor(Math.random() * amountOfStories);
        const randomStoryId = allStories[randomNumber].id;

        try {
            dispatch(setActiveStory(randomStoryId));
            dispatch(closeMenu());
            dispatch(switchSelected('none'));
            dispatch(switchSort('date'));
        } catch (exception) {
            //error handling here!!
            console.log('error');
        }
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
    <ul className={`h-full flex ${(deviceWidth < 640 && menu.selected !== 'none') ? 'pt-16 justify-center' : 'flex-col justify-center align-middle gap-20'}`}>
        <li className={menu.selected === 'new' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}>
            <button className='w-full min-w-[110px]' onClick={handleDisplayNew} >
                <p className='amulya text-center text-lg sm:text-xl font-medium'>new stories</p>
            </button>
        </li>
        <li className={menu.selected === 'all' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}>
            <button className='w-full min-w-[110px]' onClick={handleDisplayAll} >
                <p className='amulya text-center text-lg sm:text-xl font-medium' >all stories</p>
            </button>
        </li>
        <li className='opacity-50 hover:opacity-100'>
            <button className='w-full min-w-[110px]' onClick={handleDisplayRandomStory}>
                <p className='amulya text-center text-lg sm:text-xl font-medium'>random story</p>
            </button>
        </li>
    </ul>
  )
}

export default Menu;
