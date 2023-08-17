import React from 'react'
import Plus from '../../assests/plus.png'
import './Education.scss'
import Option from '../../assests/option.png'
import educationData from './Education-details'

const Education = () => {
  return (
    <div className='education-container'>
        <div className='education-heading'>
            <h4>Education</h4>
            <img src={Plus} alt="plus" />
        </div>

        {
         educationData.map((item , id) => {
         return  (
            <div key={id} className='education-content'>
            <div className='leftedu-content'>
             <img className='cllg-img' src={item.img} alt="" />
             <div className='cllg-details'>
                <h6>item.university</h6>
                <p className='subject'> {item.subject}</p>
                <p className='education-date'>{item.date}</p>
             </div>
             <img className="option-img" src={Option} alt="option" />
            </div>

            <div className='rightedu-content'>
                <div className='rightside-details'>
                    <div className='grade'>
                     <h6>GPA:</h6>
                     <p>22</p>
                    </div>
                    <div className='subject'>
                        <h6>Major:</h6>
                        <p>Chemistry</p>
                    </div>
                </div>


                <div className='rightside-details'>
                    <div className='grade'>
                        <h6>Minor:</h6>
                        <p>Informatics</p>
                    </div>
                    <div className='subject'>
                    <h6>Co-op:</h6>
                    <p>Enrolled</p>
                    </div>
                </div>


                <div className='rightside-details'>
                    <div className='grade'>
                        <h6>Level:</h6>
                        <p>Undergraduate</p>
                    </div>
                </div>


            </div>
        </div>
         )
})   
        }


       
    </div>
  )
}

export default Education