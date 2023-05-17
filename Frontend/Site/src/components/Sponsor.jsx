import Red from '../assets/Red.png'
import Orange from '../assets/Orange.png'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import SponsorCard from './SponsorCard'
import {sponsors} from '../data/sponsorsData'

function Sponsor() {
    
      useEffect(() => {
        if(window.innerWidth>=1000){
            gsap.to('.moveR',{
                x: "random(-100, 500)",
                y: "random(0, 1000);",
                duration: 15,
                ease:"none",
                repeat:-1,
                repeatRefresh:true
            });
            gsap.to('.moveO',{
                x: "random(-50, 1100)", 
                y: "random(-50, 1200)",
                duration: 15,
                ease:"none",
                repeat:-1,
                repeatRefresh:true
            }) 
        }  
        else if(window.innerWidth>=700){
            gsap.to('.moveR',{
                x: "random(-100, 300)",
                y: "random(0, 1300);",
                duration: 15,
                ease:"none",
                repeat:-1,
                repeatRefresh:true
            });
            gsap.to('.moveO',{
                x: "random(-50, 900)", 
                y: "random(-50, 1400)",
                duration: 15,
                ease:"none",
                repeat:-1,
                repeatRefresh:true
            }) 
        }   
        else{
            gsap.to('.moveR',{
                x: "random(-50, 75)",
                y: "random(0, 3100);",
                duration: 15,
                ease:"none",
                repeat:-1,
                repeatRefresh:true
            });
            gsap.to('.moveO',{
                x: "random(-50, 125)", 
                y: "random(-50, 3425)",
                duration: 15,
                ease:"none",
                repeat:-1,
                repeatRefresh:true
            }) 
        }  

    }, []);
  return (
        
        <section id='sponsor' className="w-full min-h-screen md:pl-16 relative bg-[#171717ff]  text-white overflow-hidden" style={{'fontFamily':'MangoGrotesque'}}>
            <div className="moveR absolute">
                <img src={Red} width={600} alt="" />
            </div>
            <div className="moveO absolute">
                <img src={Orange} alt="" />
            </div>
            <div className="h-auto relative z-1">

                <div className="pl-16 xs:pl-4 xs:flex justify-around md:justify-between items-center px-5 py-10">
                    <p className="text-5xl sm:text-6xl md:text-7xl pt-5 md:pt-0 pl-0 sm:pl-16 font-bold uppercase tracking-widest">OUR SPONSORS</p>
                    <div className='pr-0 md:pr-20'><Link to="/tickets"><button className='flex bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase'><span className={`text-base lg:text-xl font-semibold tracking-wide `} style={{'fontFamily':'MangoGrotesque'}}>Buy Passes Now</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></button></Link></div>
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
  );
}

export default Sponsor;
