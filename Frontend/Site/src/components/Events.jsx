import { FiArrowUpRight } from 'react-icons/fi'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import landscape from '../Landscape-Color.jpg'

function Events() {
  const clip={'clip-path': 'polygon(10% 0%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 20%)'}

  gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
      let ctx = gsap.context(() => {
        
        if(window.innerWidth>=640){
          gsap.to("#Eventsec", {
            // onComplete: () => { document.getElementById('Eventsec').classList.add('smooth') },
            scrollTrigger: {
              trigger: "#Eventsec",
              // markers: true,
              start: "top top",
              end: "bottom+=297 bottom",
              pin: true,
              pinSpacing: false,
              scrub: 1
            }
          });
          gsap.to("#Slider", {
            xPercent: -67,
            duration: 25,
            scrollTrigger: {
              trigger: "#Eventsec",
              // markers: true,
              toggleActions: "restart none none none",
              start: "+=20% 20%",
              end: "bottom+=130 80%",
              scrub: true
            }
          });
        }
        else if(window.innerWidth>=500){
          gsap.to("#Eventsec", {
            // onComplete: () => { document.getElementById('Eventsec').classList.add('smooth') },
            scrollTrigger: {
              trigger: "#Eventsec",
              // markers: true,
              start: "top top",
              end: "bottom+=357 25%",
              pin: true,
              pinSpacing: false,
              scrub: 1
            }
          });
          gsap.to("#Slider", {
            xPercent: -72,
            duration: 25,
            scrollTrigger: {
              trigger: "#Eventsec",
              // markers: true,
              toggleActions: "restart none none none",
              start: "+=19% 10%",
              end: "bottom+=290 25%",
              scrub: true
            }
          });
        }
        else{
          gsap.to("#Eventsec", {
            // onComplete: () => { document.getElementById('Eventsec').classList.add('smooth') },
            scrollTrigger: {
              trigger: "#Eventsec",
              // markers: true,
              start: "top top",
              end: "bottom+=607 top",
              pin: true,
              pinSpacing: false,
              scrub: 1
            }
          });
          gsap.to("#Slider", {
            xPercent: -127,
            duration: 25,
            scrollTrigger: {
              trigger: "#Eventsec",
              // markers: true,
              toggleActions: "restart none none none",
              start: "+=19% 9%",
              end: "bottom+=590 25%",
              scrub: true
            }
          });
        }
      });
      
      return () => ctx.revert();
    }, []);

  // }, []);

  return (
    <>
      <section className='h-screen bg-blue-100'></section>

      <section id="Eventsec" className="h-[85%] md:h-screen bg-[url(./h1.png)] bg-cover" style={{'fontFamily':'MangoGrotesque'}}>

        <div id="Eventsectop" className='block md:flex md:justify-between md:items-center px-6 py-4'>
          <p className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">EVENTS</p>
          
          <div className='flex items-center space-around w-auto'>
            <Router>
              <Link to="/register"><button className='flex mr-5 bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase'><span className={`text-sm lg:text-xl font-semibold tracking-wide `} style={{'fontFamily':'MangoGrotesque'}}>Buy Passes Now</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></button></Link>
              
              <Link to="/"><button className='flex mr-5 text-orange-600 border-2 border-orange-600 px-2 md:px-5 py-2 rounded-md hover:text-black hover:bg-orange-600 hover:scale-105 uppercase'><span className={`text-sm lg:text-xl font-semibold tracking-wide `} style={{'fontFamily':'MangoGrotesque'}}>View All</span><FiArrowUpRight className='flex mx-0 md:mx-2 items-center justify-center' size={25} /></button></Link>
            </Router>     
          </div>
        </div>

        {/* Slider Section */}
        <div className='overflow-x-hidden mt-12'>
        
          {/* Slider Area */}
          <div id="Slider" className='box-content flex w-[300%] h-3/4'>

            {/* Event Tab */}
            <div  className="min-w-[27%] xs:min-w-[24%] sm:min-w-[11%] md:min-w-[14%] lg:min-w-[18%] h-3/4 m-4 md:m-10">
              
              {/* Image */}
              <div className='w-full h-full' style={clip}>
                <img src={landscape} alt=""  style={{'transition':'transform 0.8s'}} className='bg-cover hover:scale-125' />
              </div>

              {/* Text Button */}
              <div className='flex justify-between mt-10'>
                <p className="text-white text-3xl md:text-4xl lg:text-5xl" style={{'fontFamily':'MangoGrotesque'}}>EVENTS</p>
                <button className='h-1/2 bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase mb-6 md:mb-0 text-[12px] md:text-sm'>View all</button>
              </div>
            </div>

            {/* Event Tab */}
            <div  className="min-w-[27%] xs:min-w-[24%] sm:min-w-[11%] md:min-w-[14%] lg:min-w-[18%] h-3/4 m-4 md:m-10">
              
              {/* Image */}
              <div className='w-full h-full' style={clip}>
                <img src={landscape} alt=""  style={{'transition':'transform 0.8s'}} className='bg-cover hover:scale-125' />
              </div>

              {/* Text Button */}
              <div className='flex justify-between mt-10'>
                <p className="text-white text-3xl md:text-4xl lg:text-5xl" style={{'fontFamily':'MangoGrotesque'}}>EVENTS</p>
                <button className='h-1/2 bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase mb-6 md:mb-0 text-[12px] md:text-sm'>View all</button>
              </div>
            </div>

            {/* Event Tab */}
            <div  className="min-w-[27%] xs:min-w-[24%] sm:min-w-[11%] md:min-w-[14%] lg:min-w-[18%] h-3/4 m-4 md:m-10">
              
              {/* Image */}
              <div className='w-full h-full' style={clip}>
                <img src={landscape} alt=""  style={{'transition':'transform 0.8s'}} className='bg-cover hover:scale-125' />
              </div>

              {/* Text Button */}
              <div className='flex justify-between mt-10'>
                <p className="text-white text-3xl md:text-4xl lg:text-5xl" style={{'fontFamily':'MangoGrotesque'}}>EVENTS</p>
                <button className='h-1/2 bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase mb-6 md:mb-0 text-[12px] md:text-sm'>View all</button>
              </div>
            </div>

            {/* Event Tab */}
            <div  className="min-w-[27%] xs:min-w-[24%] sm:min-w-[11%] md:min-w-[14%] lg:min-w-[18%] h-3/4 m-4 md:m-10">
              
              {/* Image */}
              <div className='w-full h-full' style={clip}>
                <img src={landscape} alt=""  style={{'transition':'transform 0.8s'}} className='bg-cover hover:scale-125' />
              </div>

              {/* Text Button */}
              <div className='flex justify-between mt-10'>
                <p className="text-white text-3xl md:text-4xl lg:text-5xl" style={{'fontFamily':'MangoGrotesque'}}>EVENTS</p>
                <button className='h-1/2 bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase mb-6 md:mb-0 text-[12px] md:text-sm'>View all</button>
              </div>
            </div>

            {/* Event Tab */}
            <div  className="min-w-[27%] xs:min-w-[24%] sm:min-w-[11%] md:min-w-[14%] lg:min-w-[18%] h-3/4 m-4 md:m-10">
              
              {/* Image */}
              <div className='w-full h-full' style={clip}>
                <img src={landscape} alt=""  style={{'transition':'transform 0.8s'}} className='bg-cover hover:scale-125' />
              </div>

              {/* Text Button */}
              <div className='flex justify-between mt-10'>
                <p className="text-white text-3xl md:text-4xl lg:text-5xl" style={{'fontFamily':'MangoGrotesque'}}>EVENTS</p>
                <button className='h-1/2 bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase mb-6 md:mb-0 text-[12px] md:text-sm'>View all</button>
              </div>
            </div>

            
           




            
          </div>
              
        </div>

    </section>

    <section className='h-screen bg-blue-100'></section>
    </>
  );
}

export default Events;
