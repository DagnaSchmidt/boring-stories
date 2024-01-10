import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

//components
import Story from './story/Story';
import HeroSection from './HeroSection';

//hooks
import useDeviceWidth from '../hooks/useDeviceWidth';


const MainLayout = () => {
    const menu = useSelector(state => state.menu);
    const activeStory = useSelector(state => state.activeStory.active);

    const deviceWidth = useDeviceWidth();

    if((menu.open && menu.selected === 'none' && deviceWidth < 767) || (menu.open && menu.selected !== 'none' && deviceWidth < 1279)){
        return null;
    }

    return (
        <LayoutGroup>
            <AnimatePresence>
                {activeStory &&
                    <motion.div
                        className='overflow-hidden'
                        initial={{width: 0}}
                        animate={{width: '100%'}}
                        exit={{width: 0}}
                        transition={{
                            duration: 0.6,
                            ease: 'easeInOut',
                            delay: 0.3
                        }}
                    >
                        <Story />
                    </motion.div>
                }
            </AnimatePresence>

            <AnimatePresence>
                {!activeStory &&
                    <motion.div
                        className='overflow-hidden'
                        initial={{width: 0}}
                        animate={{width: '100%'}}
                        exit={{width: 0}}
                        transition={{
                            duration: 0.6,
                            ease: 'easeInOut',
                            delay: 0.3
                        }}
                    >
                        <HeroSection />
                    </motion.div>
                }
            </AnimatePresence>
        </LayoutGroup>
    )
}

export default MainLayout;
