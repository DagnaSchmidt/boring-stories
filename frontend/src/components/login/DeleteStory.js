import React from 'react';
import { useSelector } from 'react-redux';

const DeleteStory = () => {
  const story = useSelector(state => state.story);

  return (
    <div>
      <h5 className='text-xl font-medium tracking-tighter amulya pb-4'>Delete Story</h5>

      <form>
        <select className='min-w-[320px] pb-1'>
          <option value=''>choose story</option>
          {
            story.all.map(i => <option value={i.id} key={i.id}>{i.id}, {i.title}</option>)
          }
        </select>
      </form>

    </div>
  )
}

export default DeleteStory;
