import React from 'react'
import Plus from '../../assests/plus.png'
import './Certificates.scss'

const Certificates = () => {
  return (
    <div className='certificates-container'>
        <div className='certificates-heading'>
            <h4>Certificates</h4>
            <img src={Plus} alt="plus" />
        </div>
    </div>
  )
}

export default Certificates