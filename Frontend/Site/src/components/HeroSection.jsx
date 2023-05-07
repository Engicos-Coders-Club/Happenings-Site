import { React, useEffect, useRef } from "react";
import Hero from "../components/Hero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HeroSec() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".section-1",
            start: "+=1 top",
            end: "+=105%",
            // markers:true,
            scrub: 1,
            pin: ".section-1",
            pinSpacing: false,
          },
        })
        .from(".section-1", { y: 0 })
        .to("#home", {opacity: 0})
        .to(".section-2", { opacity: "100%", y: 0 })
        .to(".section-1", { y: 0 });

      gsap
        .timeline({
          defaults: { ease: "" },
          scrollTrigger: {
            trigger: ".section-1",
            start: "+=1 top",
            end: "+=105%",
            // markers:true,
            scrub: 1,
            pin: ".section-1",
            pinSpacing: false,
          },
        })
        .to("#HapL", { rotateY: "360deg" });

        
        gsap
        .timeline({
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
    
        }).to(".HapT", {
          duration: 2,
          y: "-=12",
          z: 10,
         
        }).to(".HapT", {
          duration: 3,
          y: "+=12",
          z: 20,
         
        }).to(".HapT", {
          duration: 3,
          y: "-=10",
          z: 20,
        })
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Hero />
    </>
  );
}

export default HeroSec;
