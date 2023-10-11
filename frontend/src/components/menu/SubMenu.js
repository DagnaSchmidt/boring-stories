import React from 'react';

import SubMenuItem from './SubMenuItem';

const SubMenu = () => {
    const list = ['date', 'place', 'camera', 'hashtag'];

  return (
    <div className='pt-6 pl-14'>
        <ul className='flex flex-col gap-2'>
            {
                list.map(i => <SubMenuItem sort={i} key={i} />)
            }
        </ul>
    </div>
  )
}

export default SubMenu;