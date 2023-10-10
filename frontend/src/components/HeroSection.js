import React from 'react';
import { useSelector } from 'react-redux';

const HeroSection = () => {
    const menu = useSelector(state => state.menu);

  return (
    <div className='flex flex-col w-full pt-52'>
        <div className={menu.selected === null && 'flex flex-row gap-8'}>
            <p className='text-9xl font-medium tracking-tighter amulya'>Boring</p>
            <p className='text-9xl font-medium tracking-tighter amulya'>Stories</p>
        </div>
        <div className={menu.selected === null && 'pl-[25rem]'}>
            <p className='synonym text-xl'>from scandinavia and other places</p>
        </div>
        
        <div className='self-end'>
            <p className='w-[19rem] px-2 synonym text-base pt-20'>
                A blog with photos taken by average and not so young anymore girl living in Sweden, 
                where days are short and nights are dark and cold. Let&apos;s get bored together!
            </p>
        </div>
    </div>
  )
}

export default HeroSection;