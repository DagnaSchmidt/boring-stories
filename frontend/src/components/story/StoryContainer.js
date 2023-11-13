import React from 'react';

const StoryContainer = () => {
    const isNew = "NEW";
    const prevImg = "../../images/prev1.png";
    const place = "Oslo";
    const date = "12 05 23"
    const description = "Lorem";
    const hashtags = ['new', 'Oslo', 'fujifilm'];

  return (
    <div className='w-52 h-48 bg-primary'>
        {/* position relative, size SMALL STORY */}
        <div className='border-secondary border-4 h-48 flex flex-col justify-between'>
            <p className='synonym font-bold px-1'>{isNew}</p>
            <img src={require('../../images/prev1.png')} alt='text' className='h-[128px] w-full grayscale hover:grayscale-0 hover:cursor-pointer' />
            <div className='flex justify-between px-1 items-baseline'>
                <p className='synonym text-lg font-medium'>{place}</p>
                <p className='synonym text-sm'>{date}</p>
            </div>
            <div className='hidden'>
                <p>{description}</p>
                {
                    hashtags.map(i => <p>#{i}</p>)
                }
            </div>
            {/* small story: normal display, big story: absolute, full screen  */}
        </div>
    </div>
  )
}

export default StoryContainer;
