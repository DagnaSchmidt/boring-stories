import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { closeActiveStory, clearActiveStoryData } from '../../reducer/storyReducer';

const Story = () => {
    const dispatch = useDispatch();

    const story = useSelector(state => state.story);
    const { createdAt, title, description } = story.details;

    const closeStory = () => {
        dispatch(closeActiveStory());
        setTimeout(function() {
            dispatch(clearActiveStoryData());
        }, 30000);
    }

  return (
        <div className='w-full'>
            <button onClick={closeStory}>
                <h2 className='text-body pt-[22px] pb-[50px] hover:cursor-pointer font-medium tracking-tighter amulya'>
                    Boring Stories
                </h2>
            </button>

            <div className='border-4 border-secondary w-full flex flex-col gap-8 px-4 py-8'>
                <div className='flex justify-between '>
                    <p className='amulya text-base font-medium'>{title}</p>
                    <p className='amulya text-sm'>{createdAt}</p>
                </div>
                <p className='amulya text-sm px-4'>{description}</p>
            </div>
        </div>
  )
}

export default Story;
