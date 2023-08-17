import React from 'react'
import './Profilepage.scss'
import Profile from '../../assests/profile.png'
import Location from '../../assests/location.png'
import Mail from '../../assests/envelope.png'
import Linkedin from '../../assests/linkedin.png'
import Github from '../../assests/Group.png'
import Techpage from '../../components/tech/Techpage'
import ProfileNavbar from './ProfileNavbar'

const ProfilePage = () => {
  return (
    <div>
    <div className='profilepage-container'>
        <div className='profilepage-heading'>
            <h4>Profile info</h4>
          <div className='pencil-icon'>
            <ion-icon name="pencil-sharp"></ion-icon>
          </div>
        </div>
{/*  content */}

      <div className='profilepage-content'>

        <div className='flex ml-10 '>
        <div className='profile-img'>
            <img className='userprofile-img' src={Profile} alt="" />

            <div className='flex ml-6 mt-16 md:mt-0'>
            <div className="w-10 h-10 bg-primary rounded-full mt-3 ml-2 ">
            <img className="w-6 object-cover  mx-auto mt-2" src={Linkedin} alt="linkedin" />
          </div>
            <div className="w-10 h-10 bg-primary rounded-full mt-3 ml-2 ">
            <img className="w-6 object-contain  mx-auto mt-2" src={Github} alt="linkedin" />
          </div>
            </div>
        </div>

        <div className='profile-details'>
         <h4>Jane Dae</h4>
         <p className='profile-username'>@janadae</p>
         <p className='profile-description'>Hi! my name is Jane Dae. Glad to be here! Hi! my name is Jane Dae. Glad to be here!
         Hi! my name is Jane Dae. Glad to be here!Hi! my name is Jane Dae. Glad to be here!

         </p>
        </div>
        </div>




        <div className='rightside-profile'>
            <div className='profile-location'>
                <img src={Location} alt="" />
                <p>Miami, Fl, USA</p>
            </div>
            <div className='profile-mail'> 
                <img src={Mail} alt="" />
                <p>jane.dae@gmail.com</p>
            </div>
        </div>



      </div>
        <div className=' tech-profile'>
            <Techpage/>
        </div>

    </div>

   <ProfileNavbar/>

    </div>
  )
}

export default ProfilePage