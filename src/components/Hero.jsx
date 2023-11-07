import React from 'react'
import Passport from '../img/Usii_passport_L.jpg'
import { FaGithub, FaFileLines } from "react-icons/fa6";
import Typewriter from './Typewriter';
import styled from "styled-components";
import { keyframes } from "styled-components";


const Hero = () => {
  const hue = keyframes`
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
    `;

    const AnimatedGradientText = styled.h1`
      color: #f35626;
      background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-animation: ${hue} 10s infinite linear;
      font-feature-settings: "kern";
      overflow-wrap: break-word;
      text-rendering: optimizelegibility;
      -moz-osx-font-smoothing: grayscale;
    `;



  return (
    <div className='px-4 py-8 md:grid-cols-2 md:grid' id='home'>
      <div className='relative order-2'>
        {/* <div className='-z-10 w-[150px] bg-blue-200 h-[170px] absolute rounded-tl-full -top-5 -left-4 md:w-[250px] md:h-[200px] md:-top-6 md:left-32'></div>
        <div className='-z-10 w-[150px] bg-blue-500 h-[170px] absolute rounded-br-full -bottom-5 -right-4 md:w-[250px] md:h-[200px] md:-bottom- md:right-32'></div> */}
        <div className='w-full rounded-full bg-slate-800 md:w-[60%] md:mx-auto'>
          <img src={Passport} className='rounded-full mx-auto w-[96%] py-1 md:py-3 md:w-[95%]' />
        </div>
      </div>
      <div className='py-4 w-full md:py-12 md:w-[65%] mx-auto'>
        <AnimatedGradientText className='text-3xl font-bold md:text-6xl'>Hey!</AnimatedGradientText>
        <h2 className='my-2 text-2xl font-bold text-blue-500 md:text-4xl md:my-6'>
        I'm <Typewriter text="Usman Awwal" delay={400} infinite />
        </h2>
        <p className='text-sm md:text-xl'>Frontend web developer with a solid background in Cyber 
        security, committed to developing online apps that are 
        aesthetically pleasing, safe, and responsive. Motivated 
        to utilize best practices in frontend development and 
        cyber security. 
        </p>
        <div className='w-full flex justify-between md:w-[80%] mx-auto my-4 md:my-8'>
        <a href='#' >
          <div className='flex p-3 mx-2 text-xs text-white border rounded-md bg-slate-800 border-slate-800 md:p-4 md:text-xl md:mx-4 hover:bg-slate-900'>
            <FaGithub className= 'mr-2 md:mr-4' /> 
            <p>Visit Github</p>
          </div>
        </a>
        <a href='#' >
          <div className='flex p-3 mx-2 text-xs bg-transparent border rounded-md text-slate-800 border-slate-800 md:p-4 md:text-xl md:mx-4 hover:bg-slate-100 '>
            <FaFileLines className= 'mr-2 md:mr-4' /> 
            <p>Download CV</p>
          </div>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Hero