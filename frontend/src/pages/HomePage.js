import React from 'react';
import HeroSection from '../components/HeroSection';
import Menu from '../components/menu/Menu';
import ToggleMenuButton from '../components/menu/ToggleMenuButton';
import GridLayout from '../components/story/GridLayout';

const HomePage = () => {
  return (
    <div className='bg-primary flex 2xl:justify-center h-screen'>
      <div className='2xl:w-[86rem] w-full lg:px-20 md:px-8 px-4 relative'>
        <ToggleMenuButton />
        <Menu />
        <GridLayout />
        <HeroSection />
      </div>
    </div>
  )
}

export default HomePage;