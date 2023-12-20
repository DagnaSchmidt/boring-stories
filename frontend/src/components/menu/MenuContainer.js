import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, useCycle } from 'framer-motion';

//components
import Menu from './Menu';

//actions
import { toggleMenu } from '../../reducer/menuReducer';


const MenuContainer = () => {
    const menu = useSelector(state => state.menu);

    const dispatch = useDispatch();

    const [open, cycleOpen] = useCycle(
        {
            width: '8px',
            heigh: '8px'
        },
        {
            width: 'auto',
            heigh: 'auto',
        }
    )

  return (
    <motion.div
        className='bg-primary border-secondary border-4 flex justify-center content-center relative'
        initial={false}
        animate={open}
        transition={{
            duration: 0.2
        }}
        layout
    >

        <motion.button
            onTap={cycleOpen}
            onClick={() =>dispatch(toggleMenu())}
            className='absolute'
        >
            <p className='synonym text-xl font-medium tracking-wider'>
                {menu.open ? 'close' : menu.page === 'home' ? 'start here' : 'menu'}
            </p>
        </motion.button>

        { menu.open && <Menu /> }

    </motion.div>
  )
}

export default MenuContainer;
