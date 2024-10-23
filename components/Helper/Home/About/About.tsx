import React from 'react'
import SectionHeading from '../../SectionHeading'
import { aboutInfo } from '@/Data/Data'
import { FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      <SectionHeading>About Me</SectionHeading>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
        {/* text content */}
        <div>
          <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>
            {aboutInfo.title}
          </h1>
          <p className='mt-6 text-base text-gray-500'>{aboutInfo.description}</p>
          <div className='mt-8'>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-7 h-7 bg-blue-600 flex flex-col items-center justify-center'>
                <FaCheck className='text-white'/>
              </div>
              <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Frontend Development</p>
            </div>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-7 h-7 bg-green-600 flex flex-col items-center justify-center'>
                <FaCheck className='text-white'/>
              </div>
              <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Backend Development</p>
            </div>
            <div className='flex items-center space-x-2 mb-6'>
              <div className='w-7 h-7 bg-orange-600 flex flex-col items-center justify-center'>
                <FaCheck className='text-white'/>
              </div>
              <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Full Stack Development</p>
            </div>
          </div>
        </div>
        {/* state content */}
        <div className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>
          {/* 1st state */}
          <div>
            <img src="/images/customer.png" alt="image" width={80} height={80} className='mx-auto'/>
            <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.client}</p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>Satisfied Customer</p>
          </div>
          {/* 2nd state */}
          <div>
            <img src="/images/experience.png" alt="image" width={80} height={80} className='mx-auto'/>
            <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.experience}</p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>Years Experience</p>
          </div>
          {/* 3rd state */}
          <div>
            <img src="/images/completed.png" alt="image" width={80} height={80} className='mx-auto'/>
            <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.project}</p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>Completed Projects</p>
          </div>

          {/* 4th state */}
          <div>
            <img src="/images/rocket.png" alt="image" width={80} height={80} className='mx-auto'/>
            <p className='mt-3 font-bold text-xl text-white text-center'>{aboutInfo.website}</p>
            <p className='text-base sm:text-lg text-gray-400 text-center'>Website Launched</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About