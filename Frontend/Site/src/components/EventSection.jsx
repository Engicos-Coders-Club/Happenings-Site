import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import EventTab from "./EventTab";
import { eventsData } from "../data/EventTabData";
import Navbar from "../components/navbar";
import SideBar from "../components/SideBar";
import { getCategories } from "../actions/categories";
import {useDispatch,useSelector} from 'react-redux'

import axios from "axios";
// require("dotenv").config();

function Events(props) {
  const dispatch = useDispatch()
  const { title } = props;

  const {categories} = useSelector((state)=>state.category)
  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(()=>{


      gsap.defaults({ ease: "none" });

      ScrollTrigger.matchMedia({

        "(max-width: 767px)": function() {

        
        },

      "(min-width: 768px) and (max-width: 1024px)": function() {
          // gsap.timeline({
          //     defaults:{duration:2,ease:'none'},
          //     scrollTrigger:{
          //         trigger:'.HRO',
          //         start:"+=1% top",
          //         end:"+80% bottom",
          //         // markers:true,
          //         scrub:1,
          //         pin:true,
          //         pinSpacing:false,
                
          //     }
          // })
          // .fromTo(heroT.current,{opacity:1},{scale:0,opacity:0})
          // .fromTo(T.current,{scale:0,opacity:0},{scale:1,opacity:1})

          // gsap.timeline({
          //     defaults:{duration:3,ease:'none'},
          //     scrollTrigger:{
          //         trigger:'.HRO',
          //         start:"+=1% top",
          //         end:"+=70% bottom",
          //         // markers:true,
          //         pinSpacing:false,
          //         scrub:1,
          //         pin:levs.current,
          //         snap:2,
          //     }
          // })
          // .fromTo(levs.current,{scale:1},{scale:1.2})
          // .to(levs.current,{opacity:0, display:'block'})
        
      },

      
      "(min-width: 1024px)": function() {
          gsap.defaults({ease: "SteppedEase.config(12)"})
          gsap.timeline({
            scrollTrigger: {
              trigger: "#Eventsec",
              // markers: true,
              start: "top top",
              end: "bottom+=1097 bottom",
              pin: true,
              pinSpacing: false,
              scrub: 1
            }
          })
          .to('#schedule',{y:0})
          .to("#Eventsec",{y:0})
        

          gsap.timeline({
            scrollTrigger: {
              trigger: "#Eventsec",
              // markers: true,
              toggleActions: "restart none none none",
              start: "+=20% 20%",
              end: "bottom+=430 80%",
              scrub: true
            }
          })
          .to("#Slider", { xPercent: -67, duration: 45, ease: "in" });

          // gsap.timeline({
          //   defaults:{ease:'none',duration:5},
          //   scrollTrigger: {
          //     trigger: "#Eventsec",
          //     // markers: true,
          //     start: "top top",
          //     end: "bottom+=297 bottom",
          //     pin: true,
          //     pinSpacing: false,
          //     scrub: 1
          //   }
          // })
          // .to('#Eventsec',{y:0})
          // .to('#schedule',{y:'10%'})
        

          
          
          
      }

      })

      // return () => {
      //     ScrollTrigger.killAll();
      // };
    })
    // return () => {
    //   ctx.revert()
    // };
  }, []);
    

  

  useEffect(() => {
    // axios.get(`http://192.168.1.149:5000/api/all-categories/`).then((res) => {
    //   setcategory(res.data);
    
    // });
    dispatch(getCategories())
  }, []);


  return (
    <>

      <section
        id="Eventsec"
        className="h-[85%] md:h-screen bg-event-sec-bg bg-cover"
        style={{ fontFamily: "MangoGrotesque" }}
      >
        <Navbar />
        <SideBar />

        <div
          id="Eventsectop"
          className="block md:flex md:justify-between md:items-center px-6 py-4 pl-16 md:pl-20"
        >
          <p className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            EVENTS
          </p>

          <div className="flex items-center space-around w-auto pr-14">
            <Link to="/register">
              <button className="flex mr-5 bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase text-white ">
                <span
                  className={`text-sm lg:text-xl font-semibold tracking-wide`}
                  style={{ fontFamily: "MangoGrotesque" }}
                >
                  Buy Passes Now
                </span>
                <FiArrowUpRight
                  className="flex mx-2 items-center justify-center"
                  size={25}
                />
              </button>
            </Link>

            <Link to="/">
              <button className="flex mr-5 text-orange-600 border-2 border-orange-600 px-2 md:px-5 py-2 rounded-md hover:text-white hover:bg-orange-600 hover:scale-105 uppercase">
                <span
                  className={`text-sm lg:text-xl font-semibold tracking-wide `}
                  style={{ fontFamily: "MangoGrotesque" }}
                >
                  View All
                </span>
                <FiArrowUpRight
                  className="flex mx-0 md:mx-2 items-center justify-center"
                  size={25}
                />
              </button>
            </Link>

          </div>
        </div>

        {/* Slider Section */}
        <div className="overflow-x-hidden mt-12 md:pl-16">
          {/* Slider Area */}
          <div id="Slider" className="box-content flex w-[300%] h-3/4">
            {
              categories ? 
                categories.map((data) => {
                  return (
                        <EventTab
                          img={data.category_img}
                          eventName={data.category_name}
                          id={data.id}
                          key={data.id}
                        />
                );
              })
              :null 
            }
            {eventsData.map((event, id) => {
              return (
                <EventTab
                  img={event.img}
                  eventName={event.eventName}
                  key={id}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* <section className='h-0 lg:h-[40vh]' /> */}
    </>
  );
}

export default Events;
