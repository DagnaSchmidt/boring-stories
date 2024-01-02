import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

//components
import Menu from './Menu';
import MenuButton from './MenuButton';


const MenuContainer = () => {
    const menu = useSelector(state => state.menu);

    // const [open, cycleOpen] = useCycle(
    //     {
    //         width: '1%',
    //         height: '1%',
    //         minWidth: '0px',
    //         maxWidth: '1px',
    //         maxHeight: '1px',
    //         marginTop: '32px'
    //     },
    //     {
    //         width: '100%',
    //         height: '100%',
    //         minWidth: '280px',
    //         maxWidth: '1600px',
    //         maxHeight: '2600px',
    //         marginTop: '0'
    //     }
    // )

  return (
    <div className='bg-primary border-secondary border-4 flex justify-center content-center relative'>

        <MenuButton />

        <AnimatePresence>
            { menu.open && <Menu /> }
        </AnimatePresence>

    </div>
  )
}

export default MenuContainer;
