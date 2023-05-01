import Red from '../assets/Red.png'
import Orange from '../assets/Orange.png'
import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import SponsorCard from './SponsorCard'
import {sponsors} from '../data/sponsorsData'

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
    <section className="w-full h-auto absolute bg-black  text-white overflow-hidden" style={{'fontFamily':'MangoGrotesque'}}>

        <div className="moveR absolute">
            <img src={Red} width={600} alt="" />
        </div>
        <div className="moveO absolute">
            <img src={Orange} alt="" />
        </div>
        <div className="h-auto relative z-1">

            <div className="flex justify-center items-center py-10">
                <p className="text-3xl sm:text-5xl md:text-6xl">OUR SPONSORS</p>
            </div>

            {
                sponsors.map((sponsor)=>{
                    return(
                        <SponsorCard title={sponsor.title} data={sponsor.collection}/>
                    )
                })
            }
                        

        </div>

    </section>
  );
}

export default Sponsor;
