import React from 'react'
import js from "../Assets/stack/Javascript.svg";
import css from "../Assets/stack/CSS.png";
import Bootstrap from "../Assets/stack/Bootstrap.svg";
import Express from "../Assets/stack/Express.png";
import Git from "../Assets/stack/Git.svg";
import Github from "../Assets/stack/Github.svg";
import html from "../Assets/stack/HTML.png";
import Vercel from "../Assets/stack/Vercel.svg";
import Tailwind from "../Assets/stack/Tailwind.png";
import redux from "../Assets/stack/Redux.svg";
import Reactimg from "../Assets/stack/React.png";
import NodeJs from "../Assets/stack/NodeJs.svg";
import MongoDB from "../Assets/stack/MongoDB.svg";
import MaterialUI from "../Assets/stack/MaterialUI.svg";
import styled, { keyframes } from "styled-components";

import vector from "../Assets/userAsset/blob vector.png"
import { useSelector } from 'react-redux';


const vectorAnimation = keyframes`
  0% {
    transform: translate(-20px, 20px);
  }
  50% {
    transform: translate(0);
  }
  100% {
    transform: translate(-20px, 20px);
  }
`;

const AnimatedVector = styled.img`
filter: drop-shadow(16px 16px 16px #091072);
  position: absolute;
  z-index: -10;
  animation: ${vectorAnimation} 5s infinite;
 

`;

const About = () => {
  const {isDarkMode} =useSelector((state)=>state.darkmode)
  return (
    <div id='about' className='flex w-11/12 lg:w-7/12 mx-auto items-center justify-between gap-[100px]   flex-col lg:flex-row mt-[100px]'>
        <div className=' flex lg:w-[40%] justify-center flex-col gap-6'>
            <h1 className={`  ${isDarkMode?"text-[#7FFFD4]":"text-[#0039a6]"}   text-6xl`}>Me and <br /> MyTech Stack</h1>
           <div className='flex  justify-center flex-col gap-6'>
            <p>I specialize in the MERN stack—MongoDB, Express.js, React, and Node.js—enabling end-to-end web application development. </p>
            <p> Proficient in both frontend and backend, I create responsive interfaces using React and build robust APIs with Node.js and Express.js. MongoDB serves as my preferred database for its scalability. My full-stack capabilities allow me to ensure cohesive application architecture. </p>
            <p>With an ever-curious mindset, I stay current with evolving tech trends. Problem-solving skills, dedication to quality, and commitment to continuous learning define my approach to crafting efficient and impactful web solutions.</p>
           </div>
        </div>

        <div className='relative flex max-w-[360px] flex-wrap items-center justify-center gap-5 z-10'>

            <img      className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500' src={html} alt="" />
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={js} alt="" />
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={css} alt="" />
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={Bootstrap} alt="" />
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={Tailwind} alt="" />
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={Reactimg} alt="" />
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={Express} alt="" />
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={MongoDB} alt="" />
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={NodeJs} alt="" /> 
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={MaterialUI} alt="" />
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={redux} alt="" />
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={Github} alt="" />
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={Vercel} alt="" />
            <img     className='w-[40px] hover:scale-125 transition-all ease-in-out duration-500'  src={Git} alt="" />

            <AnimatedVector src={vector} alt='' className={`${isDarkMode?"":""}`} />
            
            

        </div>
    </div>
  )
}

export default About