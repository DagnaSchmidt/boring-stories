import React from 'react';
import { useSelector } from 'react-redux';

const Menu = () => {
    const menu = useSelector(state => state.menu);
    console.log(menu);
    
  return (
    <div>Menu</div>
  )
}

export default Menu;