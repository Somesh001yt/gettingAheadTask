import React from 'react'
import './ProfileInfo.scss'

const ProfileInfo = () => {
  return (
    <div className='profile-container'>
        <div className='flex justify-between'>
            <h4 className='heading' >Profile Info</h4>

            <div className=' icon'>
            <ion-icon name="pencil-outline"></ion-icon>
            </div>
        </div>
    </div>
  )
}

export default ProfileInfo