import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import { courses } from '../data/Courses';

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  return (
    <div className='w-full py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            
        <div className='w-full bg-white py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
        <div className='flex justify-center py-8 md:gap-8 '>
        
            </div>
            <div style={{marginLeft:'300px',marginRight:'300px'}}>
            <h1 className='text-center text-4xl font-bold text-[#080808]'>Elevating Card Programm With cutting-Edge Technology</h1>
            <p className='text-center  text-[#536E96] text-xl'>Leading companies use the same courses to help employees </p>
            </div>
        
        </div>

    </div>

            
        <div style={{display:'flex'}}>
          <div style={{height:'50vh',width:'30vw',marginLeft:'70px',marginTop:'40px'}} className='w-full bg-[#E9F8F3B2] '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKIhpGkaJxeGrAYdTU5Sasrgxz-VgAV_YslJxii427XK7gsLNYk9DnNCbty6BHtdR7Nw" alt="image" style={{height:'50vh',width:'30vw'}}/>
        </div>
          <div style={{height:'30vh',width:'20vw',marginLeft:'200px',marginTop:'100px'}} className='w-full bg-[#E9F8F3B2] ' >
            <h2>Spending</h2>
          <span>9349 visa</span>
          </div>
          </div>    
            
        </div>

    </div>
  )
}

export default Courses