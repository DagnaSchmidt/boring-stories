import React from 'react';
import { useSelector } from 'react-redux';

const GridLayout = () => {
    const menu = useSelector(state => state.menu);

    if(menu.selected !== 'new' && menu.selected !== 'all'){
        return null;
    }

  return (
    <div className='absolute right-96 max-lg:right-80 max-md:right-0 max-md:top-24 w-[19rem] max-md:w-full max-md:z-50 z-40 bg-secondary grid grid-cols-1 grid-rows-3 justify-items-center items-center h-full max-md:h-[calc(100%-6rem)] py-12 max-md:py-2'>
        <div className='bg-primary w-52 h-44'>x</div>
        <div className='bg-primary w-52 h-44'>x</div>
        <div className='bg-primary w-52 h-44'>x</div>
    </div>
  )
}

export default GridLayout;
