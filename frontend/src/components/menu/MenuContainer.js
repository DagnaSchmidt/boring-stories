import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

//components
import Menu from './Menu';
import MenuButton from './MenuButton';


const MenuContainer = () => {
    const menu = useSelector(state => state.menu);

    const variants = {
        isClosed: {
            marginTop: '32px',
            height: '1%',
            width: '1%',
            transition: {
                ease: 'easeOut',
                duration: 0.3,
            }
        },
        isOpened: {
            marginTop: '0px',
            height: '100%',
            width: '100%'
        }
    }


  return (
    <motion.div
        className='bg-primary border-secondary border-4 relative flex justify-center items-center max-w-[1200px] sm:max-w-[320px]'
        variants={variants}
        animate={menu.open ? 'isOpened' : 'isClosed'}
        initial='isClosed'
    >

        <MenuButton />

        <AnimatePresence>
            {
                menu.open &&
                    <motion.div
                        initial={{
                            scale: 0,
                            width: 0,
                            height: 0,
                            minWidth: '0px'
                        }}
                        animate={{
                            scale: 1,
                            width: '100%',
                            height: '100%',
                            minWidth: '280px'
                        }}
                        exit={{
                            scale: 0,
                            width: 0,
                            height: 0,
                            minWidth: '0px'
                        }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeOut'
                        }}
                    >
                        <Menu/>
                    </motion.div>

            }
        </AnimatePresence>

    </motion.div>
  )
};

export default MenuContainer;
