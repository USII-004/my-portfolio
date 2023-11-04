import React from 'react'
import Skillslide from './Skillslide'
import Skilldata from './Skilldata'

const Skills = () => {
  const skills = Skilldata.map(item => {
    return (
      <Skillslide 
        {...item} 
      />
    )
  })
  
  return (
    <div className='py-6'>
      <h1 className='text-3xl font-bold text-center'>Skills/Experience</h1>
      <div className='flex my-4 overflow-x-scroll flex-nowrap'>
        {skills}
      </div>
    </div>
  )
}

export default Skills