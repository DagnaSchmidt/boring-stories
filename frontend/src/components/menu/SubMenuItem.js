import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { switchSort } from '../../reducer/menuReducer';

const SubMenuItem = ({sort}) => {
    const menu = useSelector(state => state.menu);
    const dispatch = useDispatch();

  return (
    <li className={menu.sort !== sort && 'opacity-70 hover:opacity-90'}>
        <button onClick={() => dispatch(switchSort(sort))} disabled={menu.sort === sort && true}>
            <p className='amulya text-sm'>by {sort}</p>
        </button>
    </li>
  )
}

export default SubMenuItem;