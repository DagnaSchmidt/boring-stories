import React from 'react';
import { useSelector } from 'react-redux';

const Menu = () => {
    const menu = useSelector(state => state.menu);
    console.log(menu);

  return (
    <div className={!menu.open ?
        'bg-primary w-2 h-2 border-4 border-secondary absolute lg:right-20 md:right-8 right-4 top-[3.35rem]'
        :
        'bg-primary w-[19rem] max-md:w-full h-full border-4 border-secondary absolute lg:right-20 md:right-8 right-0 top-0 z-10'
        }>
        
    </div>
  )
}

export default Menu;