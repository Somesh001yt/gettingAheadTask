import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const DropdownProfile = () => {
    const [openprofile, setOpenprofile] = useState(false);

  return (
    <div className='flex flex-col dropdownprofile  top-16 right-10 lg:right-40'>
      <ul className='flex flex-col gap-4'>
        <li>
          <NavLink to="/profile-info" activeClassName="active-link">
            Edit Profile
          </NavLink>
        </li>
        <li onClick={() => console.log('work')} >Cancel</li>
      </ul>
      
    </div>

  );
};

export default DropdownProfile;
