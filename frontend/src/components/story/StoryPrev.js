import React from 'react';

const StoryPrev = () => {
    const story = {
        id: 1,
        createdAt: '12 04 2023',
        title: 'Oslo',
        prevImg: 'prev1.png',
        altText: ''
    }

  return (
    <div className='w-44 h-40 border-4 border-secondary flex flex-col justify-between'>
        <img src={require(`../../images/${story.prevImg}`)} alt={story.altText} className='grayscale hover:grayscale-0' />
        <div className='flex justify-between items-end px-1 pb-1'>
            <p className='amulya text-base font-medium'>{story.title}</p>
            <p className='amulya text-sm'>{story.createdAt}</p>
        </div>
    </div>
  )
}

export default StoryPrev;
