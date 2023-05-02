import {React, useEffect,useRef} from 'react'
import Hero from '../components/Hero'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HeroSec() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx = gsap.context(() => {
      gsap.timeline({
        defaults:{ease:'none',duration:5},
        scrollTrigger:{
            trigger:'.section-1',
            start:"+=1 top",
            end:"+=105%",
            // markers:true,
            scrub:1,
            pin:'.section-1',
            pinSpacing:false,
        }
      })
      .from('.section-1',{y:0})
      .to('.MainText',{opacity:"0"})
      .to('.section-2',{opacity:'100%',y:0})
      .to('.section-1',{y:0});
      
      // return () => {
      //   ScrollTrigger.killAll();
      // };
      
    });
    
    return () => ctx.revert();
  }, []);

// useEffect(() => {
  
//   // gsap.to('.smokeCloud1', {
//   //   x:'+=150%',
//   //   repeat:-1,
//   //   duration:60,
//   //   opacity:0,
//   //     ease: "sine.inOut",
//   //     toggleActions:"play pause resume reset"
//   // });

//   // gsap.to('.smokeCloud2', {
//   //   x:'-=150%',
//   //   y:'+=10%',
//   //   repeat:-1,
//   //   duration:60,
//   //   opacity:0,
//   //     ease: "sine.inOut",
//   //     toggleActions:"play pause resume reset",
//   // });

  

  

// });
  return (
  <>
    <Hero />
  
  </>
  )
   
}

export default HeroSec