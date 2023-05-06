import React, { Component } from "react";
import Navbar from "../components/navbar";
import "./Hero.css";
export class Hero extends Component {
  render() {
    return (
      <section
        id="home"
        className="w-full h-screen overflow-x-hidden  section-1 m-0 p-0"
      >
        <Navbar />
        <div className="w-full h-full flex justify-center items-center z-10">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>

          {/* content */}
          <div className="h-[35%] sm:h-[40%] md:h-[45%] lg:h-[50%] w-[80%] flex flex-col items-center justify-center">
            <div className="w-24 h-24 md:w-36 md:h-36 transform origin-center will-change-transform mb-8">
              <img
                id="HapL"
                src="/assets/Rectangle.png"
                className="h-full w-full object-contain mx-auto"
              ></img>
            </div>

            <p className="font-MANGO font-extrawide bg-gradient-to-b from-white to-[#4F0C0C] text-transparent bg-clip-text MainText 
            text-7xl sm:text-[8rem] lg:text-9xl tracking-wide will-change-transform text-center sm:leading-[1]">
              HAPPENINGS 2023
            </p>

            <h1 className="lg:text-5xl text-gray-200 font-BEBAS text-[2rem] text-center leading-3 mt-8 sm:mt-2">
              19 & 20 May
            </h1>
          </div>
        </div>
        {/* <img src="/assets/smoke.png" className='top-0 absolute z-0 opacity-20 smokeCloud1 left-[-27%]' ></img>
            <img src="/assets/smoke.png" className='top-0 absolute z-0 opacity-20 smokeCloud2 right-[-27%]'></img> */}
      </section>
    );
  }
}

export default Hero;
