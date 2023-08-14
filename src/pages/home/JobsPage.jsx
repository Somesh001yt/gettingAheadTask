import React from 'react'
import Card from '../../components/card/Card'
import CardData from '../../components/card/Carddetails'
import Plus from '../../assests/plus.png'

const JobsPage = () => {
  return (
    <div>
    <div className="bg-[#FFFFFF] mt-10 rounded-sm box-border z-10">
      <div className="flex  justify-between ">
        <h1 className="mt-10 ml-8 mb-8 text-blue font-semibold text-2xl ">
          Jobs <span className="text-gray text-base ml-2">(320)</span>
        </h1>
        <div className="mr-10 w-10 object-contain mt-10  ">
         <img src={Plus} alt="plus" />
        </div>
      </div> 
         <div className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2' >
         {CardData.map((content, index )=> (
          <Card
          key={index}
          {...content}
          />
        ))}
         </div>
        
        </div>



    </div>
  )
}

export default JobsPage