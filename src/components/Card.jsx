import React from 'react'
import { blogImg1 } from '../assets'
import StarRating from './StarRating'

const Card = ({course}) => {
  return (
    <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4 '>
        <img src={course.linkImg} 
                className="h-40 w-full object-cover"
        
        />
  
    </div>
  )
}

export default Card