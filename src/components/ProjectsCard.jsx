import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProjectsCard = (props) => {
  React.useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-sine',
      delay: 50,
    });
  }, [])

  return (
    <div 
    data-aos="zoom-out-up"
    className='mx-1 my-10 bg-gray-300 shadow-lg md:w-[30rem] rounded-md'>
      <div>
        <img src={props.image} alt='projects' />
      </div>
      <div className='py-4'>
        <div className='flex my-3 text-lg md:text-2xl'>
          <h3 className='mx-2 font-bold'>Title:</h3>
          <p>{props.tittle}</p>
        </div>
        <div className='flex my-3 text-lg md:text-2xl'>
          <h3 className='mx-2 font-bold'>Stacks:</h3>
          <p>{props.stacks}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard