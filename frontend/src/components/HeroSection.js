import React from 'react';
import { useSelector } from 'react-redux';

const HeroSection = () => {
    const menu = useSelector(state => state.menu);

  return (
    <div className='flex flex-col w-full pt-52 max-sm:pt-44'>
        <div className={menu.selected === 'none' ? 'flex flex-row max-xl:flex-col gap-8' : 'max-xl:flex-column'}>
            <p className='max-sm:text-8xl text-9xl font-medium tracking-tighter amulya'>Boring</p>
            <p className='max-sm:text-8xl text-9xl font-medium tracking-tighter amulya'>Stories</p>
        </div>
        <div className={menu.selected === 'none' ? 'pl-[25rem] max-xl:pl-16' : 'pl-0'}>
            <p className='synonym max-sm:text-sm text-xl'>from scandinavia and other places</p>
        </div>

        <div className='self-end'>
            <p className='max-sm:w-44 max-xl:w-64 w-[19rem] px-2 synonym max-xl:text-sm text-base pt-20 max-sm:pt-44 max-xl:pt-60'>
                A blog with photos taken by average and not so young anymore girl living in Sweden,
                where days are short and nights are dark and cold. Let&apos;s get bored together!
            </p>
        </div>
    </div>
  )
}

export default HeroSection;
