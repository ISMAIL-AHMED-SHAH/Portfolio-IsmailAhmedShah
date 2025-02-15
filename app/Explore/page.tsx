import React from 'react';
import Link from 'next/link';
import projects from '../../Data/projects.json';
import Image from 'next/image';

const ExploreMore = () => {
  return (
    <div className='w-full p-10 mt-1 bg-gray-600'>
      <h1 className='text-3xl font-bold text-center mb-6 mt-24 text-white'>My Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.projects.map((project) => (
          <div key={project.id} className='bg-gray-800 text-white p-6 rounded-lg shadow-lg'>
            <Image width={300} height={300} src={project.image} alt={project.title} className='w-full h-40 object-cover mb-4 rounded-md' />
            <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
            <p className='mb-4'>{project.description}</p>
            <p className='text-xl font-semibold'>Launched on: {project.date}</p>
            <p className='mt-2'>Purpose: {project.purpose}</p>
            <p className='mt-2'>
              Link:{" "}
              <Link href={project.url} className='text-blue-400 underline'>
                {project.url}
              </Link>
            </p>
            {project.isFeatured && <p className='text-green-400 font-semibold'>Featured</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
