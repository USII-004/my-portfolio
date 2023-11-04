import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='py-8 rounded-tr-[60%] rounded-tl-[60%] md:rounded-tl-sm md:rounded-tr-sm bg-blue-200'>
      <h1 className='text-2xl font-bold text-center md:text-5xl'>Contact Me</h1>
      <div className='w-12 h-1 mx-auto bg-blue-500 rounded-md md:w-24 md:h-2'></div>
      <div className='my-8 text-center'>
        <h2 className='text-lg font-bold md:text-2xl'>Let's work together...</h2>
        <p className='text-xs italic md:text-base'>How do you like your coffee?</p>
        <div className='flex mx-auto my-4 max-w-fit md:my-12'>
          <a href='#'>
            <FaGithubSquare className='mx-2 text-3xl md:text-7xl md:mx-8 hover:scale-150'/>
          </a>
          <a href='#'>
            <FaTwitterSquare className='mx-2 text-3xl md:text-7xl md:mx-8 hover:scale-150'/>
          </a>
          <a href='#'>
            <FaInstagramSquare className='mx-2 text-3xl md:text-7xl md:mx-8 hover:scale-150'/>
          </a>
          <a href='#'>
            <FaFacebookSquare className='mx-2 text-3xl md:text-7xl md:mx-8 hover:scale-150'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact