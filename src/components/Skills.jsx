import React from 'react';
import Skillslide from './Skillslide';
import Skilldata from './Skilldata';

const Skills = () => {
  return (
    <div className='py-6 w-[80%] mx-auto h-[50%] md:py-24'>
      <h1 className='text-3xl font-bold text-center md:text-6xl'>Skills/Experience</h1>
      <div className='flex my-10 overflow-hidden md:my-24'>
        <div className='flex animation-slide'>
          {Skilldata.map((item, index) => (
            <Skillslide key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
