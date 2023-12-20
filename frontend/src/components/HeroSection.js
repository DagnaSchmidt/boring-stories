import React from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
    const menu = useSelector(state => state.menu);
    console.log(menu);

    const width = window.innerWidth;
    console.log(width);

  return (
    <AnimatePresence>
        {(!menu.open || (menu.open && menu.selected === 'none' && width > 768) || (menu.open && menu.selected !== 'none' && width > 1280)) &&
            <motion.div
                className='flex flex-col w-full pt-44 md:pt-52'
                initial={false}
                animate={{
                    width: '100%'
                }}
                exit={{
                    width: '0'
                }}
                transition={{
                    duration: 0.4
                }}
            >
                <div className='flex flex-row max-xl:flex-col gap-8 pr-8'>
                    <p className='max-sm:text-8xl text-9xl font-medium tracking-tighter amulya'>Boring</p>
                    <p className='max-sm:text-8xl text-9xl font-medium tracking-tighter amulya'>Stories</p>
                </div>
                <div className={menu.selected === 'none' ? 'pl-[25rem] max-xl:pl-16' : 'pl-0'}>
                    <p className='synonym max-sm:text-sm text-xl'>from scandinavia and other places</p>
                </div>

                <motion.div
                    transition={{
                        duration: 0.4
                    }}
                    className={menu.open ? 'self-start' : 'self-end'}
                >
                    <p className='max-sm:w-44 max-xl:w-64 w-[19rem] px-2 synonym max-xl:text-sm text-base pt-20 max-sm:pt-44 max-xl:pt-60'>
                        A blog with photos taken by average and not so young anymore girl living in Sweden,
                        where days are short and nights are dark and cold. Let&apos;s get bored together!
                    </p>
                </motion.div>
            </motion.div>
        }

    </AnimatePresence>
  )
}

export default HeroSection;
