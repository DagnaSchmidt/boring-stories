import React from 'react';
import {useDispatch } from 'react-redux';

import { changeActiveStory } from '../../reducer/storyReducer';

const StoryPrev = ({data}) => {
    const { createdAt, title, prevImg, altText} = data;
    const dispatch = useDispatch();

  return (
    <div className='w-52 h-44 border-4 border-secondary flex flex-col justify-between'>
        <button onClick={() => dispatch(changeActiveStory())} className='w-full'>
            <img src={require(`../../images/${prevImg}`)} alt={altText} className='grayscale hover:grayscale-0' />
        </button>
        <div className='flex justify-between items-end px-1 pb-1'>
            <p className='amulya text-base font-medium'>{title}</p>
            <p className='amulya text-sm'>{createdAt}</p>
        </div>
    </div>
  )
}

export default StoryPrev;
