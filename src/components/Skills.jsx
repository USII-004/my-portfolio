import React from 'react'
import Skillslide from './Skillslide'
import Skilldata from './Skilldata'

const Skills = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Skilldata.length);
    }, 3000); // Change slide every 3 seconds (adjust the interval as needed)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  
  const skills = Skilldata.map((item, index) => {
    return (
      <Skillslide 
        key={index}
        isActive={index === currentIndex}
        {...item} 
      />
    )
  })
  
  return (
    <div className='py-6 w-[80%] mx-auto'>
      <h1 className='text-3xl font-bold text-center'>Skills/Experience</h1>
      <div className='flex my-4 overflow-hidden'>
        {skills}
      </div>
    </div>
  )
}

export default Skills