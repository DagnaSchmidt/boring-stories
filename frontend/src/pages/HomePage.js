import React from 'react';
import { LayoutGroup } from 'framer-motion';

//components
import HeroSection from '../components/HeroSection';
import MenuContainer from '../components/menu/MenuContainer';

const HomePage = () => {
  return (
    <div className='bg-primary flex 2xl:justify-center h-screen'>
      <div className='w-full 2xl:w-[86rem] px-4 md:px-8 lg:px-20 relative flex'>
        <LayoutGroup>
          <HeroSection />
          <MenuContainer />
        </LayoutGroup>
      </div>
    </div>
  )
}

export default HomePage;
