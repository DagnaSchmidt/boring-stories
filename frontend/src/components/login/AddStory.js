import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//actions
import { addStory } from '../../reducer/allStoriesReducer';


const AddStory = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    prevImg: '',
    altText: '',
    localization: '',
    description: '',
    images: ''
  });

  const handleSubmit = (e) => {
      e.preventDefault();

      const imagesArr = formData.images.split(' ');

      const newStory = {
        ...formData,
        images: imagesArr
      };

      try {
        dispatch(addStory(newStory));
        setFormData({
          title: '',
          prevImg: '',
          altText: '',
          localization: '',
          description: '',
          images: ''
        });
        window.alert(`Story ${newStory.title} added!`);
      } catch (exception) {
        console.log('failed to add new story');
      }
  };

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({...formData, [name]: value});
  };


  return (
    <div className='flex flex-col'>
      <h5 className='text-xl font-medium tracking-tighter amulya pb-4'>Add Story</h5>

      <form className='flex flex-col gap-2 min-w-[320px]' onSubmit={handleSubmit}>

        <input
          placeholder='title'
          type='text'
          onChange={handleInputChange}
          value={formData.title}
          name='title'
        />

        <input
          placeholder='prev img'
          type='text'
          onChange={handleInputChange}
          value={formData.prevImg}
          name='prevImg'
        />

        <input
          placeholder='alt text'
          type='text'
          onChange={handleInputChange}
          value={formData.altText}
          name='altText'
        />

        <input
          placeholder='localization'
          type='text'
          onChange={handleInputChange}
          value={formData.localization}
          name='localization'
        />

        <textarea
          placeholder='description'
          onChange={handleInputChange}
          value={formData.description}
          name='description'
        />

        <textarea
          placeholder='images'
          onChange={handleInputChange}
          value={formData.images}
          name='images'
        />

        <button>
          <p className='synonym text-base font-medium tracking-wider'>submit</p>
        </button>
      </form>
    </div>
  )
};

export default AddStory;
