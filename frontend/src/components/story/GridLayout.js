import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

import StoryPrev from './StoryPrev';


const GridLayout = () => {
    const menu = useSelector(state => state.menu);
    const allStories = useSelector(state => state.story.all);

    const newStories = allStories.slice(0,3);
    const remainingStories = allStories.slice(3);


  return (
    <AnimatePresence>
        {menu.selected !== 'none' &&
            <motion.div
              initial={{
                width: '0'
              }}
              animate={{
                width: '100%'
              }}
              exit={{
                width: '0'
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut'
            }}
              className='absolute md:static top-14 right-0 h-[90%] md:h-full xl:min-w-[280px] z-20 overflow-scroll scrollbar-hide justify-self-end flex flex-col items-center'
            >

              <div className={`h-full flex flex-col py-11 bg-primary ${menu.selected === 'new' ? 'justify-between' : 'gap-12'}`}>
                  {
                    newStories.map(i => <StoryPrev key={i.id} data={i} />)
                  }
                  {
                    menu.selected === 'all' &&
                    remainingStories.map(i => <StoryPrev key={i.id} data={i} />)
                  }
              </div>

            </motion.div>
        }
    </AnimatePresence>
  )
}

export default GridLayout;
