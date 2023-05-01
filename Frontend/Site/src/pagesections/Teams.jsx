import React from 'react'
import {useState} from 'react'
import TeamCards from '../components/TeamCards'
import '../Stylesheets/Teams.css'
import council from '/public/Teams_Info/Council.json'
import WebTeam from '/public/Teams_Info/WebDevs.json'
import Coordinators from '/public/Teams_Info/Coordinators.json'
import Advisors from '/public/Teams_Info/Advisors.json'
import Navbar from '../components/navbar'
import side from '../components/SideBar'
import SideBar from '../components/SideBar'
function Teams() {
  const [toggleState,setToggleState]=useState(1);
  const toggleTab=(index)=>{
    setToggleState(index)
  }
  return (
    <>
    <Navbar />
    <SideBar/>
    <section className='w-screen relative  bg-[#171717ff] flex flex-wrap overflow-hidden'>

      <div className='flex justify-center w-full relative h-[10%]'>
        <div>
          <p className='font-MANGO text-white text-5xl sm:text-7xl md:text-8xl lg:9xl relative p-10'>MEET THE TEAM</p>
        </div>

      </div>



      <div className='relative w-full flex justify-center items-center border-y-2 border-[#FF6600] h-[50px]'>
        <ul className='font-MANGO sm:text-1.5xl lg:text-2xl text-1.5xl text-white list-none flex flex-right gap-9 p-2 cursor-pointer'>
          <li onClick={() => toggleTab(1)} className={toggleState == 1 ? 'active-tab' : 'non-active-tab'}>COUNCIL</li>
          <li onClick={() => toggleTab(2)} className={toggleState == 2 ? 'active-tab' : 'non-active-tab'}>COORDINATORS</li>
          <li onClick={() => toggleTab(3)} className={toggleState == 3 ? 'active-tab' : 'non-active-tab'}>ADVISORS</li>
          <li onClick={() => toggleTab(4)} className={toggleState == 4 ? 'active-tab' : 'non-active-tab'}>WEB TEAM</li>
        </ul>

      </div>




      <div className={toggleState == 1 ? 'active content relative w-full flex flex-wrap justify-evenly min-h-screen p-20 gap-x-20 gap-y-20' : 'non-active-content'}>
        {council.map((item) => (
          <TeamCards data={item} />
        ))}
      </div>

      <div className={toggleState == 2 ? 'active content relative w-full flex flex-wrap justify-evenly min-h-screen p-20 gap-x-20 gap-y-20' : 'non-active-content'}>
        {Coordinators.map((item) => (
          <TeamCards data={item} />
        ))}
      </div>

      <div className={toggleState == 3 ? 'active content relative w-full flex flex-wrap justify-evenly min-h-screen p-20 gap-x-20 gap-y-20' : 'non-active-content'}>
        {Advisors.map((item) => (
          <TeamCards data={item} />
        ))}
      </div>

      <div className={toggleState == 4 ? 'active content relative w-full flex flex-wrap justify-evenly min-h-screen p-20 gap-x-20 gap-y-20' : 'non-active-content'}>
        {WebTeam.map((item) => (
          <TeamCards data={item} />
        ))}
      </div>


    </section></>
  )
}

export default Teams