import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';

import { switchSelected, toggleMenu } from '../../reducer/menuReducer';
import StoryPrev from './StoryPrev';


const GridLayout = () => {
    const menu = useSelector(state => state.menu);
    // const story = useSelector(state => state.story);

    const dispatch = useDispatch();


    const newStories = useSelector(state => state.story.new);
    // const allStories = useSelector(state => state.story.all);

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
              className='absolute md:static top-14 right-0 h-[90%] md:h-full xl:min-w-[280px] z-20 overflow-scroll justify-self-end flex flex-col items-center scrollbar-hide'
            >

              <button className='ml-12 self-start md:ml-6 md:mt-6' onClick={() => dispatch(switchSelected('none'))}>
                  <p className='amulya text-lg font-medium'>
                      return
                  </p>
              </button>

              <div className='h-full flex flex-col justify-between py-11 bg-primary'>
                  {
                    newStories.map(i => <StoryPrev />)
                  }
              </div>


            </motion.div>
        }
    </AnimatePresence>
  )
}

export default GridLayout;
