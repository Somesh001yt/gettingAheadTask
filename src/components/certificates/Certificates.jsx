import React from 'react'
import Plus from '../../assests/plus.png'
import './Certificates.scss'
import Option from '../../assests/option.png'
import { certificatesData } from './CertificatedData'

const Certificates = () => {
  return (
    <div className='certificates-container'>
        <div className='certificates-heading'>
            <h4>Certificates</h4>
            <img src={Plus} alt="plus" />
        </div>

       {certificatesData.map((item , id)=>{
        return (
          <div key={id} className='certificate-content'>
          <div className='leftSide'>
            <h6>Certificate</h6>
            <p>{item.certificate}</p>
          </div>

          <div className='rightSide'>
          <p className={item.status === 'Completed' ? 'completeone' : 'incompleteone'}>{item.status}</p>
            <img className='option-img' src={Option} alt="" />
          </div>
        </div>
        )
       })}

        
    </div>
  )
}

export default Certificates