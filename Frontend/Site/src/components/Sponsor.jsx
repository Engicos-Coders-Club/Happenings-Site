import Line from '../assets/Line.png'
import Logo from '../assets/Logo.png'
import Red from '../assets/Red.png'
import Orange from '../assets/Orange.png'
import { gsap } from 'gsap'
import React, { useState, useEffect } from 'react'

function Sponsor() {
    
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
  
  	useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

    
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
  	}, [screenSize])

    
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
        <div className="h-[140vh] relative z-1">

            <div className="flex justify-center items-center py-10">
                <p className="text-3xl sm:text-5xl md:text-6xl">OUR SPONSORS</p>
            </div>


            <div>
                <div className="hidden md:flex items-center justify-around px-10">
                    <img src={Line} width={screenSize.width - 400} alt="" />
                    <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl">TITLE SPONSORS</span>
                </div>
                <div className="block md:hidden px-10 my-3">
                    <img src={Line} width={screenSize.width - 40} alt="" />
                    <p className="text-lg sm:text-2xl text-right">TITLE SPONSORS</p>
                </div>

                <div className="flex justify-center my-3">
                    <div className="block w-full h-full md:flex md:justify-around">
                        <a href=""><img className='hover:scale-105 w-1/2 m-auto my-5 md:w-full md:m-0' src={Logo} /></a>
                        <a href=""><img className='hover:scale-105 w-1/2 m-auto my-5 md:w-full md:m-0' src={Logo} /></a>
                        <a href=""><img className='hover:scale-105 w-1/2 m-auto my-5 md:w-full md:m-0' src={Logo} /></a>
                    </div>
                </div>
            </div>            

        </div>

    </section>
  );
}

export default Sponsor;
