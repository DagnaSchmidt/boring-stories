import React from 'react';
import HeroSection from '../components/HeroSection';
import Menu from '../components/Menu';

const HomePage = () => {
  return (
    <div className='bg-primary flex 2xl:justify-center h-screen'>
      <div className='2xl:w-[86rem] w-full lg:mx-20'>
        <Menu />
        <HeroSection />
      </div>
    </div>
  )
}

export default HomePage;