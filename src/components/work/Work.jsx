import React from 'react'
import Plus from '../../assests/plus.png'
import './Work.scss'

const Work = () => {
  return (
    <div className='work-container'>
        <div className='work-heading'>
            <h4>Work</h4>
            <img src={Plus} alt="plus" />
        </div>
    </div>
  )
}

export default Work