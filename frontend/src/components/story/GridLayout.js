import React from 'react';
import { useSelector } from 'react-redux';

import StoryContainer from './StoryContainer';

const GridLayout = () => {
    const menu = useSelector(state => state.menu);
    const newStories = useSelector(state => state.story.new);
    const allStories = useSelector(state => state.story.all);
    console.log(newStories);

    if(menu.selected !== 'new' && menu.selected !== 'all'){
        return null;
    }

  return (
    <div className={menu.selected === 'new' ? 'absolute right-96 max-lg:right-80 max-md:right-0 max-md:top-24 w-[19rem] max-md:w-full max-md:z-50 z-40 bg-primary grid grid-cols-1 grid-rows-3 justify-items-center items-center h-full max-md:h-[calc(100%-6rem)] py-12 max-md:py-2 max-md:border-x-4 max-md:border-secondary'
                                            : 'absolute right-96 max-lg:right-80 max-md:right-0 max-md:top-24 w-[calc(100%-29rem)] max-md:w-full max-md:z-50 z-40 bg-primary grid grid-cols-3 max-md:grid-cols-1 max-md:grid-rows-none max-md:gap-3 gap-32 justify-items-center items-center h-full max-md:h-[calc(100%-6rem)] overflow-scroll py-12 max-md:py-2 max-md:border-x-4 max-md:border-secondary'}>
        {
          menu.selected === 'new' ?
            newStories.map(i => <StoryContainer />)
            :
            allStories.map(i => <StoryContainer />)
        }
    </div>
  )
}

export default GridLayout;
