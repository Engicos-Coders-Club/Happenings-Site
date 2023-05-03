import Red from '../assets/Red.png'
import Orange from '../assets/Orange.png'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import SponsorCard from './SponsorCard'
import {sponsors} from '../data/sponsorsData'
import Navbar from '../components/navbar'
import SideBar from '../components/SideBar'

function Sponsor() {
    
      useEffect(() => {
        if(window.innerWidth>=1000){
            gsap.to('.moveR',{
                x: "random(-100, 500)",
                y: "random(-300, 400);",
                duration: 5,
                ease:"none",
                repeat:-1,
                repeatRefresh:true
            });
            gsap.to('.moveO',{
                x: "random(-100, 1100)", 
                y: "random(-50, 700)",
                duration: 5,
                ease:"none",
                repeat:-1,
                repeatRefresh:true
            }) 
        }  
        else if(window.innerWidth>=700){
            gsap.to('.moveR',{
                x: "random(-100, 300)",
                y: "random(-300, 900);",
                duration: 5,
                ease:"none",
                repeat:-1,
                repeatRefresh:true
            });
            gsap.to('.moveO',{
                x: "random(-100, 900)", 
                y: "random(-50, 1000)",
                duration: 5,
                ease:"none",
                repeat:-1,
                repeatRefresh:true
            }) 
        }   
        else{
            gsap.to('.moveR',{
                x: "random(-100, 75)",
                y: "random(-300, 2700);",
                duration: 5,
                ease:"none",
                repeat:-1,
                repeatRefresh:true
            });
            gsap.to('.moveO',{
                x: "random(-100, 125)", 
                y: "random(-50, 3025)",
                duration: 5,
                ease:"none",
                repeat:-1,
                repeatRefresh:true
            }) 
        }  

    }, []);
  return (
    // <div className='relative'>
        
        <section className="w-full min-h-screen md:pl-16 relative bg-[#171717ff]  text-white overflow-hidden" style={{'fontFamily':'MangoGrotesque'}}>
        <Navbar />
        <SideBar />
            <div className="moveR absolute">
                <img src={Red} width={600} alt="" />
            </div>
            <div className="moveO absolute">
                <img src={Orange} alt="" />
            </div>
            <div className="h-auto relative z-1">

                <div className="flex justify-between items-center px-5 py-10">
                    <p className="text-4xl sm:text-6xl md:text-7xl font-extrabold">OUR SPONSORS</p>
                    <div className='pr-16'><Link to="/register"><button className='flex mr-5 bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase'><span className={`text-sm lg:text-xl font-semibold tracking-wide `} style={{'fontFamily':'MangoGrotesque'}}>Buy Passes Now</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></button></Link></div>
                </div>

                {
                    sponsors.map((sponsor,id)=>{
                        return(
                            <SponsorCard title={sponsor.title} data={sponsor.collection} key={id}/>
                        )
                    })
                }
                            

            </div>

        </section>
    // </div>
  );
}

export default Sponsor;
