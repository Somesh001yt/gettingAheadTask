import React, { useState } from 'react'
import './Jobs.scss'
import Card from '../../components/card/Card'
import RecommendedJobs from './RecommendedJobs'
import JobsData from './JobsData'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Jobs = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 763,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const [showAllCards , setShowAllCards] = useState(false);

 const filterMenu = () =>{
  setShowAllCards(!showAllCards)
  
 }

  return (
    <div className='jobs-container' >
      <div className='jobs-heading'>
        <h4>Saved Jobs</h4>
        <p onClick={filterMenu}>View all</p>
        
      </div>
      <div  className=' ml-[-18px] md:ml-2 lg:ml-10'>
       
      <Slider {...settings}>

     
      {JobsData.map((content, index )=> (
        (showAllCards || index < 3) && (
          <Card
          key={index}
          {...content}
          />
        )
       ) )}
       </Slider>
        
      </div>
      <button onClick={filterMenu} className='view-btn' >View all</button>

      <RecommendedJobs/>   
    </div>
  )
}

export default Jobs