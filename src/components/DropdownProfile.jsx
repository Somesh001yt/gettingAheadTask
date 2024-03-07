import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const DropdownProfile = (props) => {


  return (
    <div className='flex flex-col dropdownprofile  top-20 right-10 lg:right-28'>
      <ul className='flex flex-col gap-4'>
        <li>
        <NavLink to="/profile-page" activeClassName="active-link">
          Profile Page
        </NavLink>
        </li>
        <li onClick={() => props.closeFunction()}  >Cancel</li>
      </ul>
      
    </div>

  );
};

export default DropdownProfile;
