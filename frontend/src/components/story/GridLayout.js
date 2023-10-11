import React from 'react';
import { useSelector } from 'react-redux';

const GridLayout = () => {
    const menu = useSelector(state => state.menu);

    if(menu.selected !== 'new' && menu.selected !== 'all'){
        return null;
    }

  return (
    <div className='absolute right-96 w-[19rem] max-sm:z-10 z-50 bg-secondary grid grid-cols-1 grid-rows-3 justify-items-center items-center h-full py-12'>
        <div className='bg-primary w-52 h-44'>x</div>
        <div className='bg-primary w-52 h-44'>x</div>
        <div className='bg-primary w-52 h-44'>x</div>
    </div>
  )
}

export default GridLayout;