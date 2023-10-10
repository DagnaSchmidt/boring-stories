import React from 'react';
import HeroSection from '../components/HeroSection';
import Menu from '../components/Menu';

const HomePage = () => {
  return (
    <div className='bg-primary flex 2xl:justify-center'>
      <div className='2xl:w-[86rem] bg-slate-500 lg:mx-20'>
        <Menu />
        <HeroSection />
      </div>
    </div>
  )
}

export default HomePage;