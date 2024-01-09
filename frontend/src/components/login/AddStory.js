import React from 'react';

const AddStory = () => {
  return (
    <div className='flex flex-col'>
      <h5 className='text-xl font-medium tracking-tighter amulya pb-4'>Add Story</h5>

      <form className='flex flex-col gap-2 min-w-[320px]'>
        <input placeholder='title' />
        <input placeholder='prev img' />
        <input placeholder='alt text' />
        <input placeholder='localization' />
        <textarea placeholder='description' />
        <textarea placeholder='images' />

        <button>
          <p className='synonym text-base font-medium tracking-wider'>submit</p>
        </button>
      </form>
    </div>
  )
}

export default AddStory;
