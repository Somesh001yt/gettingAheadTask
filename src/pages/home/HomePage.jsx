import React from 'react'
import './HomePage.scss'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import CardData from '../../components/card/Carddetails'
import EmployeeInfo from '../../components/EmpInfo/EmployeeInfo'


const HomePage = () => {
  return (
    <div>

      <Header/>
      <div className='flex'>
        <div className='w-[40%]'>
      <EmployeeInfo/>
        </div>
        <div className='w-[60%]'>
      <Card details={CardData}/>
        </div>
      </div>
      
   
    </div>
  )
}

export default HomePage