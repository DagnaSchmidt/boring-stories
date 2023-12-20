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
            width: '1%',
            height: '1%',
            minWidth: '0px',
            maxWidth: '1px',
            maxHeight: '1px',
            marginTop: '32px'
        },
        {
            width: '100%',
            height: '100%',
            minWidth: '280px',
            maxWidth: '1600px',
            maxHeight: '2600px',
            marginTop: '0'
        }
    )

  return (
    <motion.div
        className='bg-primary border-secondary border-4 flex justify-center content-center relative'
        initial={false}
        animate={open}
        transition={{
            duration: 0.4
        }}
        layout
    >

        <motion.button
            onTap={cycleOpen}
            onClick={() =>dispatch(toggleMenu())}
            className={`absolute ${menu.open ? 'top-4 right-4' : 'top-[-16px] right-4 w-28'}`}
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
