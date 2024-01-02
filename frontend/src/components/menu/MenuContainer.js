import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, easeOut, motion } from 'framer-motion';

//components
import Menu from './Menu';
import MenuButton from './MenuButton';


const MenuContainer = () => {
    const menu = useSelector(state => state.menu);

  return (
    <div className='bg-primary border-secondary border-4 relative self-start mt-[32px]'>

        <MenuButton />

        <AnimatePresence>

            { menu.open &&

                <motion.div
                    initial={{
                        scale: 0,
                        width: 0,
                        height: 0,
                        minWidth: '0px',
                        minHeight: '0vh'
                    }}
                    animate={{
                        scale: 1,
                        width: 0,
                        height: 0,
                        minWidth: '280px',
                        minHeight: '100vh'
                    }}
                    exit={{
                        scale: 0,
                        width: 0,
                        height: 0,
                        minWidth: '0px',
                        minHeight: '0vh'
                    }}
                    transition={{
                        duration: 0.3,
                        ease: easeOut
                    }}
                >

                    <Menu/>

                </motion.div>

            }

        </AnimatePresence>

    </div>
  )
}

export default MenuContainer;
