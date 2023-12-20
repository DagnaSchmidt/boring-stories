import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

const Story = () => {
    const story = useSelector(state => state.story);

    // const dispatch = useDispatch();

  return (
    <AnimatePresence>
        {story.active !== 'none' &&
            <motion.div
                className='w-full'
            >

            </motion.div>
        }
    </AnimatePresence>
  )
}

export default Story;
