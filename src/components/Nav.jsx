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
      <div className='flex justify-between p-2 md:hidden'>
        <div className='flex p-2'>
          <a href='#home'>
          <div className='w-12 h-12 py-3 text-2xl font-bold text-center text-white bg-blue-500 rounded-full'>U</div>
          </a>
          <h2 className='self-center mx-2 text-lg font-bold'>Usman Awwal</h2>
        </div>
        <div onClick={toggleNav}>
          {nav 
          ? <AiOutlineMenu className='m-4 text-3xl cursor-pointer' />
          : <AiOutlineClose className='m-4 text-3xl cursor-pointer' />}
        </div>
        <div className={
          !nav ? 'absolute top-16 left-2/4 w-[50%] bg-white z-10'
          : 'hidden'
          } >
          <ul className='uppercase border-l-2 border-gray-600'>
            <li className='p-4 text-xl border-b-2 border-gray-600 '>
              <a href='#'>About</a>
            </li>
            <li className='p-4 text-xl border-b-2 border-gray-600 '>
              <a href='#'>Work</a>
            </li>
            <li className='p-4 text-xl border-b-2 border-gray-600 '>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop view */}
      <div className='justify-between hidden p-4 md:flex'>
        <div className='flex p-4 mx-16'>
          <a href='#home'>
          <div className='w-16 h-16 py-4 text-4xl font-bold text-center text-white bg-blue-200 rounded-full'>U</div>
          </a>
          <h2 className='self-center mx-2 text-2xl font-bold'>Usman Awwal</h2>
        </div>
        <div className='py-8 mx-16'>
          <ul className='flex text-2xl uppercase align-middle'>
            <li className='px-4 mx-4 border-b-4 border-transparent rounded-sm hover:border-blue-500'>
              <a href='#'>About</a>
            </li>
            <li className='px-4 mx-4 border-b-4 border-transparent rounded-sm hover:border-blue-500'>
              <a href='#'>Work</a>
            </li>
            <li className='px-4 mx-4 border-b-4 border-transparent rounded-sm hover:border-blue-500'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Nav