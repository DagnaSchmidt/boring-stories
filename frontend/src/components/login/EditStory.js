import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const EditStory = () => {
  const stories = useSelector(state => state.allStories);

  // eslint-disable-next-line
  const [storyToUpdate, setStoryToUpdate] = useState({
    active: false,
    description: '',
    id: 0
  });

  return (
    <div className='flex flex-col gap-3'>
      <h5 className='text-xl font-medium tracking-tighter amulya pb-1'>Edit Story</h5>

      <form>
        <select className='min-w-[320px] pb-1'>
          <option value=''>choose story</option>
          {
            stories.map(i => <option value={i.id} key={i.id}>{i.id}, {i.title}</option>)
          }
        </select>
      </form>

      {
        storyToUpdate.active &&
        <form className='flex flex-col min-w-[320px] gap-2'>
          <label className='amulya text-sm'>Edit description</label>
          <textarea placeholder='description...' />
          <button>
            <p className='synonym text-base font-medium tracking-wider'>submit</p>
          </button>
        </form>
      }

      {
        storyToUpdate.active &&
        <form className='flex flex-col min-w-[320px] gap-2'>
          <label className='amulya text-sm'>Add images</label>
          <textarea placeholder='images...' />
          <button>
            <p className='synonym text-base font-medium tracking-wider'>submit</p>
          </button>
        </form>
      }

    </div>
  )
}

export default EditStory;
