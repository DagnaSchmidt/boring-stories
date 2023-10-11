import React from 'react';
import { useSelector } from 'react-redux';

const Menu = () => {
    const menu = useSelector(state => state.menu);
    console.log(menu);

  return (
    <div className={!menu.open ?
        'bg-primary w-2 h-2 border-4 border-secondary absolute lg:right-20 md:right-8 right-4 top-[3.35rem]'
        :
        'bg-primary w-[19rem] max-md:w-full h-full border-4 border-secondary absolute lg:right-20 md:right-8 right-0 top-0 z-10 flex justify-center content-center'
        }>

        {
            menu.open &&
            <ul className='flex flex-col justify-center align-middle gap-20'>
                <li className={menu.selected === 'all' && 'opacity-30'}>
                    <p className='amulya text-center text-xl font-medium'>new stories</p>
                </li>
                <li className={menu.selected === 'new' && 'opacity-30'}>
                    <p className='amulya text-center text-xl font-medium'>all stories</p>
                    {
                        menu.selected === 'all' &&
                            <div className='pt-6 pl-14'>
                                <ul className='flex flex-col gap-2'>
                                    <li>
                                        <p className='amulya text-sm'>by date</p>
                                    </li>
                                    <li>
                                        <p className='amulya text-sm'>by place</p>
                                    </li>
                                    <li>
                                        <p className='amulya text-sm'>by camera</p>
                                    </li>
                                    <li>
                                        <p className='amulya text-sm'>by #</p>
                                    </li>
                                </ul>
                            </div>
                    }
                </li>
                <li className='text-center amulya'>
                    <p className='amulya text-center text-xl font-medium'>random story</p>
                </li>
            </ul>
        }
        
    </div>
  )
}

export default Menu;