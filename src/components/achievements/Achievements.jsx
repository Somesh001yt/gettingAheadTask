import React from 'react'
import Plus from '../../assests/plus.png'
import './Achievements.scss'

const Achievements = () => {
  return (
    <div className='achievements-container'>
    <div className='achievements-heading'>
        <h4>Achievements</h4>
        <img src={Plus} alt="plus" />
    </div>
</div>
  )
}

export default Achievements