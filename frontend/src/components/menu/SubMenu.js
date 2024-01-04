import React from 'react';
import { useSelector } from 'react-redux';

//components
import SubMenuItem from './SubMenuItem';

//hooks
import useDeviceWidth from '../../hooks/useDeviceWidth';

const SubMenu = () => {
    const menu = useSelector(state => state.menu);

    const list = ['date', 'place'];
    const deviceWidth = useDeviceWidth();

  return (
    <div className={`${(deviceWidth < 640 && menu.selected !== 'none') ? 'pt-2 pl-8' : 'pt-6 pl-14'}`}>
        <ul className='flex flex-col gap-2'>
            {
                list.map(i => <SubMenuItem sort={i} key={i} />)
            }
        </ul>
    </div>
  )
}

export default SubMenu;
