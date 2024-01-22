import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

//components
import StoryPrev from './StoryPrev';


const GridLayout = () => {
    const menu = useSelector(state => state.menu);
    const allStories = useSelector(state => state.allStories);

    const newStories = allStories.slice(0,3);
    const remainingStories = allStories.slice(3);

    const variants = {
      new : {
        justifyContent: 'space-between',
        gap: '16px',
        height: '100%',
        transition: {
          ease: 'easeOut',
          duration: 0.3,
      }
      },
      all: {
        justifyContent: 'flex-start',
        gap: '16px',
        height: '100%'
      }
    };


  return (
    <AnimatePresence>
        {
            menu.selected !== 'none' &&
                <motion.div
                    initial={{
                      width: '0%'
                    }}
                    animate={{
                      width: '100%'
                    }}
                    exit={{
                      width: '0%'
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}
                    className='absolute sm:static top-24 sm:top-14 right-0 h-[83%] sm:h-[90%] md:h-full z-20 overflow-y-scroll overflow-x-hidden scrollbar-hide justify-self-end flex flex-col items-center p-11 gap-4'
                >

                      <motion.div
                          className='h-full flex flex-col'
                          variants={variants}
                          animate={menu.selected === 'all' ? 'all' : 'new'}
                          initial='new'
                          layout
                      >
                          {
                            newStories.map(i => <StoryPrev key={i.id} data={i} />)
                          }
                      </motion.div>

                      <AnimatePresence>
                          {
                            menu.selected === 'all' &&
                                <motion.div
                                    className='h-full flex flex-col gap-4'
                                    initial={{paddingTop: '240px'}}
                                    animate={{paddingTop: '0px'}}
                                    exit={{paddingTop: '240px'}}
                                    transition={{
                                      duration: 0.3,
                                      ease: 'easeInOut'
                                    }}
                                    layout
                                >

                                    <p className='amulya text-xs text-center font-thin tracking-widest'>scroll</p>

                                    {
                                        remainingStories.map(i => <StoryPrev key={i.id} data={i} />)
                                    }

                                </motion.div>
                          }
                      </AnimatePresence>

                </motion.div>
        }
    </AnimatePresence>
  )
};

export default GridLayout;
