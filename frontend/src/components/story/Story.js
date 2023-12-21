import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { changeActiveStory } from '../../reducer/storyReducer';

const Story = () => {
    const dispatch = useDispatch();

    const story = useSelector(state => state.story);

    const closeStory = () => {
        dispatch(changeActiveStory('none'))
    }

  return (
    <AnimatePresence>
        {story.active !== 'none' &&
            <motion.div
                className='w-full'
            >
                <button onClick={closeStory}>
                    <h2 className='text-body pt-[22px] hover:cursor-pointer font-medium tracking-tighter amulya'>
                        Boring Stories
                    </h2>
                </button>

            </motion.div>
        }
    </AnimatePresence>
  )
}

export default Story;
