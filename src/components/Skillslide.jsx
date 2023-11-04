import React from 'react';

const Skillslide = (props) => {
  return (
    <div className='mx-1 md:mx-12'>
      <img src={props.image} className='w-full' alt='Skill' />
    </div>
  );
};

export default Skillslide;
