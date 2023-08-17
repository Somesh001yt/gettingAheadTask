import React from 'react'
import { NavLink } from 'react-router-dom';

const EditEmployee = (props) => {
    return (
        <div className='flex flex-col editemployee  top-20 right-2 '>
          <ul className='flex flex-col gap-4'>
            <li>
              <NavLink to="/edit-info" activeClassName="active-link">
                Edit info
              </NavLink>
            </li>
            <li onClick={() => props.closeFunction()}  >Cancel</li>
          </ul>
          
        </div>
    
      );
}

export default EditEmployee