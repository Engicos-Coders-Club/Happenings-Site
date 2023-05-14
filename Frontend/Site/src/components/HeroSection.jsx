import { React, useEffect, useLayoutEffect, useRef } from "react";
import Hero from "../components/Hero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HeroSec() {
  useLayoutEffect(() => {
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
          z: 16,
          rotateX:'20deg',
          x:1
         
        }).to(".HapT", {
          duration: 3,
          y: "+=15",
          z: 10,
          rotate:'0.1deg',
          x:-1
         
        }).to(".HapT", {
          duration: 3,
          y: "-=10",
          z: 15,
          rotate:'-0.5deg',
          x:0
        })
        .to(".HapT", {
          duration: 3,
          y: "+=15",
          z: 15,
          rotate:'-1deg'
        })

        gsap
        .timeline({
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
    
        }).to(".Hap-date", {
          duration: 2,
          y: "+=10",
          z: 16,
          rotateX:'20deg',
          x:1
         
        }).to(".Hap-date", {
          duration: 3,
          y: "-=15",
          z: 10,
          rotate:'0.1deg',
          x:-1
         
        }).to(".Hap-date", {
          duration: 3,
          y: "-=10",
          x:"-=5",
          z: 15,
          rotate:'-0.5deg',
        })
        .to(".Hap-date", {
          duration: 3,
          y: "-=15",
          z: 15,
          x:0,
          rotate:'-1deg'
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
