import React from 'react'
import ProjectData from './Projectdata'
import ProjectsCard from './ProjectsCard'


const Projects = () => {
  
  return (
    <div className='px-2 py-4 md:px-24'>
      <h1 className='text-2xl font-bold text-center md:text-5xl'>Completed Projects</h1>
      <div className='w-12 h-1 mx-auto bg-blue-500 rounded-md md:w-24 md:h-2'></div>
      <div className='my-4 md:grid md:grid-cols-3'>
        {ProjectData.map(items => {
          return (
            <ProjectsCard
              {...items}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects