import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { deleteStory } from '../../reducer/allStoriesReducer';


const DeleteStory = () => {
  const dispatch = useDispatch();
  const stories = useSelector(state => state.allStories);

  const [storyId, setStoryId] = useState('');

  const handleDeleteStory = (e) => {
    e.preventDefault();

    if(window.confirm(`Delete ${storyId} ?`)) {
      try {
        dispatch(deleteStory(storyId));
        window.alert(`Story ${storyId} deleted!`);
      } catch (exception) {
        console.log('failed to delete a story');
      }
    }
  };


  return (
    <div>
      <h5 className='text-xl font-medium tracking-tighter amulya pb-4'>Delete Story</h5>

      <form onSubmit={handleDeleteStory} className='flex flex-col min-w-[320px] gap-2'>
        <select onChange={(e) => setStoryId(e.target.value)} className='min-w-[320px] pb-1'>
          <option value=''>choose story</option>
          {
            stories.map(i => <option value={i.id} key={i.id}>{i.id}, {i.title}</option>)
          }
        </select>
        <button>
          <p className='synonym text-base font-medium tracking-wider'>delete</p>
        </button>
      </form>

    </div>
  )
};

export default DeleteStory;
