import React from 'react';
import { LayoutGroup } from 'framer-motion';

//components
import MenuContainer from '../components/menu/MenuContainer';
import GridLayout from '../components/story/GridLayout';
import MainLayout from '../components/MainLayout';


const HomePage = () => {
  return (
    <div className='bg-primary flex 2xl:justify-center h-screen'>
      <div className='w-full 2xl:w-[86rem] px-4 md:px-8 lg:px-20 relative flex overflow-hidden justify-end'>
        <LayoutGroup>
          <MainLayout />
          <GridLayout />
          <MenuContainer />
        </LayoutGroup>
      </div>
    </div>
  )
};

export default HomePage;
