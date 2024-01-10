import React from 'react';
import { useDispatch } from 'react-redux';

//actions
import { setActiveStory } from '../../reducer/activeStoryReducer';
import { closeMenu } from '../../reducer/menuReducer';

const StoryPrev = ({data}) => {
    const { createdAt, title, prevImg, altText } = data;
    const dispatch = useDispatch();

    const openStory = () => {
      dispatch(setActiveStory());
      dispatch(closeMenu());
    }

  return (
    <div className='w-52 border-4 border-secondary bg-primary flex flex-col gap-2'>
        <button onClick={openStory} className='w-full'>
            <img src={require(`../../images/${prevImg}`)} alt={altText} className='grayscale hover:grayscale-0 w-full h-32 object-cover' />
        </button>
        <div className='flex justify-between items-end px-1 pb-1'>
            <p className='amulya text-base font-medium'>{title}</p>
            <p className='amulya text-sm'>{createdAt}</p>
        </div>
    </div>
  )
}

export default StoryPrev;
