import React from 'react'
import SectionHeading from '../../SectionHeading'
import Slider from './Slider'

const Reviews = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      <SectionHeading>Clients Reivews</SectionHeading>
      <div className='w-[50%] sm:w-[80%] mx-auto mt-20'>
        <Slider/>

      </div>
    </div>
  )
}

export default Reviews
