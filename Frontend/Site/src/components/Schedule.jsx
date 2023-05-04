import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../components/navbar'
import SideBar from '../components/SideBar'
import ScheduleModal from './ScheduleModal';
import Day1 from '../assets/day 1.svg'
import Day2 from '../assets/day 2.svg'




function Schedule(props) {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      if(window.innerWidth>=640){
        gsap.to(".schedule", {
          opacity:"300%",   
          
          scrollTrigger: {
            trigger: ".schedule",
            // markers: true,
            start: "top center+=50",
            end: "bottom",
            scrub:1
          }
        });
        
      }

      
    });
    
    return () => ctx.revert();
  }, []);



  const [showDay1, setShowDay1] = useState(false)
  const [showDay2, setShowDay2] = useState(false)


  return (
    <section className='bg-[#171717ff] schedule opacity-0 h-auto relative md:pl-16' style={{'fontFamily':'MangoGrotesque'}}>
{/* , 'display':'grid','gridTemplateRows':'22% 55% 25%' */}
      <Navbar />
      <SideBar />

        {showDay1 && <ScheduleModal img={Day1} close={()=>setShowDay1(false)}/>}
        {showDay2 && <ScheduleModal img={Day2} close={()=>setShowDay2(false)}/>}

        <div className='flex justify-center items-center py-8 sm:py-12'>
            <p className="text-3xl xs:text-4xl sm:text-5xl text-white font-extrabold">SCHEDULE</p>
        </div>
        
        {/* <div className='flex justify-center items-center'>
            <p id="Shine" className="text-3xl xs:text-4xl sm:text-5xl text-orange-700 font-extrabold tracking-widest">COMING SOON</p>
        </div> */}

        {/* Day 1 */}
        <div className='py-8'>
          <div className="flex flex-col items-center text-white xs:justify-between xs:py-5 xs:px-16  xs:flex-row">
            <span className="mb-2 text-3xl xs:mb-0 xs:text-4xl sm:text-5xl">19 MAY</span>
            <span className="text-3xl xs:text-4xl sm:text-5xl">FRIDAY</span>
          </div>
        
          <div className='flex justify-center'>
            <div className="flex justify-between relative w-[80%]">
              <button className="block xs:hidden" onClick={()=>setShowDay1(true)}>
              <img className="relative z-[1] bg-white"
                src={Day1}
                alt="menu"
                width="1240"
                height="400"
              />
            </button>
            <img className="relative z-[1] hidden xs:block bg-white"
                src={Day1}
                alt="menu"
                width="1240"
                height="400"
              />
            </div>
        </div>
        </div>

        {/* Day2  */}
        <div className='py-8'>
          <div className="flex flex-col items-center text-white xs:justify-between xs:py-5 xs:px-16  xs:flex-row">
            <span className="mb-2 text-3xl xs:mb-0 xs:text-4xl sm:text-5xl">20 MAY</span>
            <span className="text-3xl xs:text-4xl sm:text-5xl">SATURDAY</span>
          </div>
        
          <div className='flex justify-center'>
            <div className="flex justify-between relative w-[80%]">
              <button className="block xs:hidden" onClick={()=>setShowDay2(true)}>
              <img className="relative z-[1] bg-white"
                src={Day2}
                alt="menu"
                width="1240"
                height="400"
              />
            </button>
            <img className="relative z-[1] hidden xs:block bg-white"
                src={Day2}
                alt="menu"
                width="1240"
                height="400"
              />
            </div>
        </div>
        </div>




        

        <div className='flex items-start justify-center py-10'>
         
            {/* <Link to="/register"><button className='flex mr-10 text-white bg-orange-600 px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase mb-6 md:mb-0'><span className={`text-2xl font-semibold tracking-wide `}>Buy Passes Now</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></button></Link> */}
          
            <Link to="/register"><button className='flex text-white bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase'><span className={`text-base lg:text-xl font-semibold tracking-wide `} style={{'fontFamily':'MangoGrotesque'}}>Buy Passes Now</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></button></Link>
                  
        </div>
       


    </section>
  );
}

export default Schedule;
