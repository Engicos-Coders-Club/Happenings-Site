import React, { Component} from 'react'
import Navbar from '../components/navbar';

export class Hero extends Component {
  render() {
    return (
        <>
       
            <section id="home" className="w-full h-screen overflow-x-hidden  section-1 m-0 p-0">
            <Navbar/>
            <div className='w-full h-full flex justify-center items-center z-10 '>  
            <div className="h-[35%] sm:h-[40%] md:h-[45%] lg:h-[50%] w-[80%] relative flex flex-wrap justify-evenly">

                <div className='w-full h-[50%] relative flex justify-center z-10 '>
                  <img src="/assets/Rectangle.svg" className='h-[100%] w-[50%] z-10'></img>
                </div>

                <div className='w-full relative flex justify-center items-center z-10 pt-8 h-[10%]'>
                    <h1 className="text-[3rem] text-white font-BEBAS">19 & 20 May</h1>
                </div>

                <div className='w-full relative flex justify-center items-center z-10 h-[50%]'>
                   <div >
                   <h1 className="font-MANGO font-extrawide bg-gradient-to-b from-white to-[#4F0C0C] text-transparent bg-clip-text MainText text-[3.8rem] lg:text-9xl tracking-wide">HAPPENINGS 2023</h1>
                   </div>
       
                </div>


            </div>
            </div>
            <img src="/assets/heroBGN.svg" className='object-cover w-full h-screen top-0 absolute z-0'></img>
            {/* <img src="/assets/smoke.png" className='top-0 absolute z-0 opacity-20 smokeCloud1 left-[-27%]' ></img>
            <img src="/assets/smoke.png" className='top-0 absolute z-0 opacity-20 smokeCloud2 right-[-27%]'></img> */}
            </section>
        </>
   
    )
  }
}

export default Hero