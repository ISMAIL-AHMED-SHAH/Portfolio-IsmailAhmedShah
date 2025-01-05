import React from 'react';
import coursesData from '@/data/projects.json';

const CoursesPage = () => {
  return (
    <div className='w-full p-10 mt-1 bg-gray-600'>
      <h1 className='text-3xl font-bold text-center mb-6 mt-24 text-white'>Our Courses</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {coursesData.projects.map((course) => (
          <div key={course.id} className='bg-gray-800 text-white p-6 rounded-lg shadow-lg'>
            <img src={course.image} alt={course.title} className='w-full h-40 object-cover mb-4 rounded-md' />
            <h2 className='text-2xl font-bold mb-2'>{course.title}</h2>
            <p className='mb-4'>{course.description}</p>
            <p className='text-xl font-semibold'>Price: ${course.price}</p>
            <p className='mt-2'>Instructor: {course.instructor}</p>
            {course.isFeatured && <p className='text-green-400 font-semibold'>Featured</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
