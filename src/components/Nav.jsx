import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Nav = () => {
  const [nav, setNav] = React.useState(true)

  function toggleNav() {
    setNav(prevState => !prevState )
  }

  return (
    <div>
      {/* Mobile view */}
      <div className='flex p-2 justify-between md:hidden'>
        <div className='flex p-2'>
          <a href='#home'>
          <div className='w-12 h-12 rounded-full bg-black text-white font-bold text-center py-3 text-2xl'>U</div>
          </a>
          <h2 className='font-bold text-lg mx-2 self-center'>Usman Awwal</h2>
        </div>
        <div onClick={toggleNav}>
          {nav 
          ? <AiOutlineMenu className='text-3xl m-4 cursor-pointer' />
          : <AiOutlineClose className='text-3xl m-4 cursor-pointer' />}
        </div>
        <div className={
          !nav ? 'absolute top-16 left-2/4 w-[50%] bg-white z-10'
          : 'hidden'
          } >
          <ul className='uppercase border-l-2 border-gray-600'>
            <li className='p-4 border-b-2 border-gray-600 text-xl '>
              <a href='#'>About</a>
            </li>
            <li className='p-4 border-b-2 border-gray-600 text-xl '>
              <a href='#'>Work</a>
            </li>
            <li className='p-4 border-b-2 border-gray-600 text-xl '>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop view */}
      <div className='p-4 justify-between hidden md:flex'>
        <div className='flex p-4 mx-16'>
          <a href='#home'>
          <div className='w-16 h-16 rounded-full bg-black text-white font-bold text-center py-4 text-4xl'>U</div>
          </a>
          <h2 className='font-bold text-2xl mx-2 self-center'>Usman Awwal</h2>
        </div>
        <div className='mx-16 py-8'>
          <ul className='uppercase text-2xl flex align-middle'>
            <li className='px-4 mx-4 rounded-sm border-b-4 border-transparent hover:border-gray-600'>
              <a href='#'>About</a>
            </li>
            <li className='px-4 mx-4 rounded-sm border-b-4 border-transparent hover:border-gray-600'>
              <a href='#'>Work</a>
            </li>
            <li className='px-4 mx-4 rounded-sm border-b-4 border-transparent hover:border-gray-600'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Nav