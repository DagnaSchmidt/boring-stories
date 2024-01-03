import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { closeActiveStory, clearActiveStoryData } from '../../reducer/storyReducer';

const Story = () => {
    const dispatch = useDispatch();

    const story = useSelector(state => state.story);
    const { createdAt, title, description, images } = story.details;

    const closeStory = () => {
        dispatch(closeActiveStory());
        setTimeout(function() {
            dispatch(clearActiveStoryData());
        }, 30000);
    }

  return (
        <div className='w-full h-full relative'>
            <button onClick={closeStory}>
                <h2 className='text-body pt-[22px] pb-[50px] hover:cursor-pointer font-medium tracking-tighter amulya'>
                    Boring Stories
                </h2>
            </button>

            <button className='absolute right-0 bottom-2 px-2 pb-2 rounded z-10 bg-[#1E1E1E80]'>
                <p className='synonym text-xl font-medium tracking-wider hover:cursor-pointer h-6'>up</p>
            </button>

            <div className='overflow-y-scroll scrollbar-hide h-full pb-12 relative'>
                <div className='border-4 border-secondary w-full flex flex-col gap-8 px-4 py-8'>
                    <div className='flex justify-between '>
                        <p className='amulya text-base font-medium'>{title}</p>
                        <p className='amulya text-sm'>{createdAt}</p>
                    </div>
                    <p className='amulya text-sm px-4'>{description}</p>
                </div>

                <p className='amulya text-lg py-24 text-center font-bold tracking-widest'>scroll</p>

                <div className='flex flex-col items-center gap-4 lg:gap-8 pb-24'>
                    {
                        images.map((i, index) => <img className='w-full lg:max-h-[620px] lg:object-contain' key={index} src={`https://drive.google.com/uc?export=view&id=${i}`} alt={i} />)
                    }
                </div>

            </div>


        </div>
  )
}

export default Story;
