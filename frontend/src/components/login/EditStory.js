import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { setEditStory } from '../../reducer/editStoryReducer';

const EditStory = () => {
  const dispatch = useDispatch();
  const stories = useSelector(state => state.allStories);
  const storyToUpdate = useSelector(state => state.editStory);

  const handleStoryChange = (e) => {
    try {
      dispatch(setEditStory(e.target.value));
    } catch (exception) {
        //error handling here!!
        console.log('error');
    }
  }

  return (
    <div className='flex flex-col gap-3'>
      <h5 className='text-xl font-medium tracking-tighter amulya pb-1'>Edit Story</h5>

      <form>
        <select onChange={handleStoryChange} className='min-w-[320px] pb-1'>
          <option value=''>choose story</option>
          {
            stories.map(i => <option value={i.id} key={i.id}>{i.title}</option>)
          }
        </select>
      </form>

      {
        storyToUpdate &&
        <form className='flex flex-col min-w-[320px] gap-2'>
          <label className='amulya text-sm'>Edit description</label>
          <textarea placeholder='description...' />
          <button>
            <p className='synonym text-base font-medium tracking-wider'>submit</p>
          </button>
        </form>
      }

      {
        storyToUpdate &&
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
