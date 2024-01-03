import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';


const HeroSection = () => {
    const menu = useSelector(state => state.menu);

  return (
        <div className={`flex flex-col w-full pt-44 md:pt-52 ${menu.open ? 'pr-4' : 'pr-0'}`}>
            <div className={`${menu.selected !== 'none' ? 'flex-col' : 'flex-row'} flex max-xl:flex-col gap-8 pr-8`}>
                <p className='text-8xl lg:text-9xl font-medium tracking-tighter amulya'>Boring</p>
                <p className='text-8xl lg:text-9xl font-medium tracking-tighter amulya'>Stories</p>
            </div>
            <div className={menu.selected === 'none' ? 'pl-[25rem] max-xl:pl-16' : 'pl-0'}>
                <p className='synonym max-sm:text-sm text-xl'>from scandinavia and other places</p>
            </div>

            <AnimatePresence>
                {
                    !menu.open &&
                    <motion.div
                        className='absolute w-44 sm:w-64 lg:w-[19rem] bottom-6 md:bottom-12 lg:bottom-24 right-4 md:right-8 lg:right-20'
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                            delay: 1
                        }}
                        layout
                    >
                        <p className='px-2 synonym max-xl:text-sm text-base'>
                            A blog with photos taken by average and not so young anymore girl living in Sweden,
                            where days are short and nights are dark and cold. Let&apos;s get bored together!
                        </p>
                    </motion.div>
                }
            </AnimatePresence>



        </div>
  )
}

export default HeroSection;
