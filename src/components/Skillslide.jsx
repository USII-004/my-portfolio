import React from 'react'

const Skillslide = (props) => {
  return (
    <div
      className={`w-full p-1 transition-transform duration-300 ease-in-out transform ${
        props.isActive ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <img src={props.image} className='w-full' alt='skills' />
    </div>
  )
}

export default Skillslide