import React from 'react';
import { useSelector } from 'react-redux';
import Story from './story/Story';
import HeroSection from './HeroSection';

const MainLayout = () => {
    const menu = useSelector(state => state.menu);
    const story = useSelector(state => state.story);

    const deviceWidth = window.innerWidth;

    if(story.active){
        return <Story />
    }else if(!menu.open || (menu.open && menu.selected === 'none' && deviceWidth > 767) || (menu.open && menu.selected !== 'none' && deviceWidth > 1279)){
        return <HeroSection />
    }else{
        return null;
    }
}

export default MainLayout;
