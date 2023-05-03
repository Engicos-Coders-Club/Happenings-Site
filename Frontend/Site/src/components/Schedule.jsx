import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../components/navbar'
import SideBar from '../components/SideBar'

function Schedule(props) {
  const { title } = props

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      if(window.innerWidth>=640){
        gsap.to(".schedule", {
          opacity:"200%",   
          
          scrollTrigger: {
            trigger: ".schedule",
            markers: true,
            start: "top center+=50",
            end: "bottom",
            scrub:1
          }
        });
        
      }

      
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section className='bg-[#171717ff] min-h-screen relative md:pl-16' style={{'fontFamily':'MangoGrotesque', 'display':'grid','gridTemplateRows':'22% 55% 25%'}}>

      <Navbar />
      <SideBar />

        <div className='flex justify-center items-center'>
            <p className="text-3xl xs:text-4xl sm:text-5xl text-white font-extrabold">SCHEDULE</p>
        </div>
        
        <div className='flex justify-center items-center'>
            <p id="Shine" className="text-3xl xs:text-4xl sm:text-5xl text-orange-700 font-extrabold tracking-widest">COMING SOON</p>
        </div>


        

        <div className='flex items-start justify-center'>
         
            <Link to="/register"><button className='flex mr-10 text-white bg-orange-600 px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase mb-6 md:mb-0'><span className={`text-2xl font-semibold tracking-wide `}>Buy Passes Now</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></button></Link>
          
                  
        </div>
       


    </section>
  );
}

export default Schedule;
