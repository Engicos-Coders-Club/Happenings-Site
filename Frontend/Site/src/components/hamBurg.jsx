import React, { useEffect } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { gsap } from "gsap";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

function hamBurg(props) {
    let hamClass="w-[95%] relative flex items-center justify-between border-b-0 border-t-2 border-x-2 border-orange-500 hover:bg-white hover:text-black italic"
    let hamClassLast="w-[95%] relative flex items-center justify-between border-b-2 border-t-2 border-x-2 border-orange-500 hover:bg-white hover:text-black  italic"
  
  const ReverseAnimation = () => {
    const screenHeight = window.innerHeight;
    gsap.to('.Ham', {y: -screenHeight,ease:"ease-out", durtaion:1,onComplete: () => {
        props.handleClick()}});

};

useEffect(() => {
    const screenHeight = window.innerHeight;
    gsap.fromTo('.Ham', {y: -screenHeight}, {y: 0,ease:"back", durtaion:1});
    

  });

  

  return (
    <div className='h-screen w-full absolute z-50 bg-[#171717ff] flex flex-start top-0 gap-0 Ham overflow-hidden left-0'>
    <div className=' relative flex flex-wrap text-white text-5xl pt-5 pb-5  font-MANGO'>
    
        <div className={hamClass}>
          <div className='pl-9 ' onClick={ReverseAnimation}><HashLink smooth to="/#about">ABOUT</HashLink></div>
          <div className='pr-9 '><BsBoxArrowUpRight size={30} color="#171717ff"  /></div>
        </div>

        <div className={hamClass}>
        <div className='pl-9' onClick={ReverseAnimation}><Link to="/tickets">BUY PASSES</Link></div>
          <div className='pr-9'><BsBoxArrowUpRight size={30} color="#171717ff"  /></div>
        </div>

        <div className={hamClass}>
        <div className='pl-9' onClick={ReverseAnimation}><HashLink smooth to="/#Eventsec">EVENTS</HashLink></div>
          <div className='pr-9'><BsBoxArrowUpRight size={30} color="#171717ff"  /></div>
        </div>

        

        <div className={hamClass}>
        <div className='pl-9' onClick={ReverseAnimation}><HashLink smooth to="/#schedule">SCHEDULE</HashLink></div>
          <div className='pr-9'><BsBoxArrowUpRight size={30} color="#171717ff"  /></div>
        </div>

        <div className={hamClass}>
        <div className='pl-9' onClick={ReverseAnimation}></div>
        {/* <HashLink smooth to="/#sponsor">SPONSORS</HashLink> */}
          <div className='pr-9'><BsBoxArrowUpRight size={30} color="#171717ff"  /></div>
        </div>

        <div className={hamClassLast}>
        {/* <div className='pl-9' onClick={ReverseAnimation}>TIME</div> */}
        <div className='pl-9' onClick={ReverseAnimation}> </div>
          <div className='pr-9'><BsBoxArrowUpRight size={30} color="#171717ff"  /></div>
        </div>
        
    </div>


    <div className='relative flex flex-col justify-between p-5 grow'>
    <div className='flex justify-center items-center'><AiOutlineClose size={40} color="white" onClick={ReverseAnimation} className='cursor-pointer' /></div>
    <div className='flex justify-center items-center'><img src="/assets/GEClogo.svg" className='lg:h-[3rem] lg:w-[3rem] h-[5rem] sm:w-[4rem] sm:h-[4rem] w-[5rem] relative'></img></div>

    </div>
</div>
  )
}

export default hamBurg