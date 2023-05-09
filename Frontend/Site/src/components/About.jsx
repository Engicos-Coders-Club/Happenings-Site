// ! About Section Page => /about
import { useEffect, useRef, useState } from "react";
import { socials } from "../data/socials";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { gecLogo } from "../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import brochure from '../Brochure/Happenings2023.pdf'

// TODO: Change GEC LOGO

function About(props) {
  useEffect(() => {
    //   gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: "#about",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        })
        .to("#AboutSide", {
          textDecoration: "underline",
          onComplete: () => {
            gsap.to("#AboutSide", { textDecoration: "none" });
          },
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className={
        "bg-[#171717ff] text-white min-h-screen will-change-transform opacity-0 " +
        props.animation
      }
      style={{ willChange: "opacity" }}
      ref={props.ref}
    >
      {/* {<SideBar select={isTrue? "about":""}/>} */}

      <div className="w-4/5 mx-auto pb-16">
        <div className="pt-8 flex justify-end">
          {/* <img src={gecLogo} alt="GEC Logo" width={50} /> */}
        </div>
        <div className="flex justify-between">
          <h1
            className={`font-bold text-7xl md:text-8xl pt-8 uppercase tracking-widest`}
            style={{ fontFamily: "MangoGrotesque" }}
          >
            About
          </h1>
          <a className="pt-10" href={brochure} download>
            <button className="flex text-white bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase">
              <span
                className={`text-base lg:text-xl font-semibold tracking-wide `}
                style={{ fontFamily: "MangoGrotesque" }}
              >
                Download Brochure
              </span>
              <FiArrowUpRight
                className="flex mx-2 items-center justify-center"
                size={25}
              />
            </button>
          </a>
        </div>
        <div className="flex gap-x-4 pt-5">
          {socials.map((social) => {
            return (
              <a
                href={social.link}
                target="_blank"
                key={social.link}
                className="hover:scale-125"
                rel="noopener noreferrer"
              >
                <img src={social.img} alt="social" width={40} height={40} />
              </a>
            );
          })}
        </div>
        <div className="mt-4 flex flex-col md:flex md:flex-row">
          <div className="flex flex-col md:w-2/3">
            <p
              className={`py-3 md:py-0 md:text-xl`}
              style={{ fontFamily: "Merriweather" }}
            >
              "Happenings" was first started in 1981, making it the oldest and
              most popular college fest amongst the youth of Goa. It is one of
              Goa's largest cultural festival, that provides the perfect
              platform for youngsters to demonstrate their talents. This is a
              one stop destination for unleashing the creative monster inside
              us. This year we celebrate "Happenings 2023 " which will mark the
              39th year celebration of the event.
            </p>
          </div>
          <div className="my-3 md:my-0 md:mx-auto">
            <p
              className={`uppercase font-bold text-4xl md:text-5xl italic decoration-8 0-underline-offset-8 decoration-cus-bright-orange underline pb-2 tracking-wider text-center`}
              style={{ fontFamily: "MangoGrotesque" }}
            >
              8K+ Attendees
            </p>
            <p
              className={`uppercase font-bold text-4xl md:text-5xl italic decoration-8 0-underline-offset-8 decoration-cus-bright-orange underline py-2 tracking-wider text-center`}
              style={{ fontFamily: "MangoGrotesque" }}
            >
              30+ Events
            </p>
            <p
              className={`uppercase font-bold text-4xl md:text-5xl italic decoration-8 0-underline-offset-8 decoration-cus-bright-orange underline py-2 tracking-wider  text-center`}
              style={{ fontFamily: "MangoGrotesque" }}
            >
              DJ Night
            </p>
          </div>
        </div>
        <div className="mx-auto border-orange-500 border-2 border-dotted py-10 w-full md:w-3/4 my-10 rounded-tl-3xl rounded-br-3xl">
          <h3
            className="uppercase text-4xl md:text-6xl text-center font-bold"
            style={{ fontFamily: "MangoGrotesque" }}
          >
            Get your <span className="text-cus-bright-orange">Tickets</span> Now
          </h3>
          {/* <p className='text-xl text-center mx-auto my-4 tracking-wide' style={{ 'fontFamily': 'MangoGrotesque' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptate a recusandae nam, animi similique?</p> */}
          {/* <button className='flex border-white border px-5 py-2 rounded-md hover:bg-orange-700 hover:border-0 hover:scale-105 uppercase mb-3 md:mb-0 mx-auto my-4'><Link to="/register" className='flex justify-center items-center'><span className={`text-2xl font-semibold tracking-wide flex justify-center items-center`} style={{ 'fontFamily': 'MangoGrotesque' }}>View All Tickets</span><FiArrowUpRight className='flex mx-2 items-center justify-center' size={25} /></Link></button> */}
          <button
            disabled={true}
            className="flex border-white border px-5 py-2 rounded-md hover:bg-cus-orange hover:border-0 hover:scale-105 uppercase mb-3 md:mb-0 mx-auto my-4"
          >
            <span
              className={`text-2xl font-semibold tracking-wide flex justify-center items-center`}
              style={{ fontFamily: "MangoGrotesque" }}
            >
              Coming soon ...
            </span>
          </button>
        </div>
        <div className="mx-auto border-orange-500 border-2 border-dotted py-10 w-full md:w-3/4 my-10 rounded-tl-3xl rounded-br-3xl">
          <h3
            className="uppercase font-bold text-4xl md:text-6xl text-center text-cus-bright-orange"
            style={{ fontFamily: "MangoGrotesque" }}
          >
            Rules <span className="text-white">&</span> Points{" "}
            <span className="text-white">System</span>{" "}
          </h3>
          {/* <p className='text-xl text-center mx-auto my-4 tracking-wide' style={{ 'fontFamily': 'MangoGrotesque' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptate a recusandae nam, animi similique?</p> */}
          <button className="flex border-white border px-5 py-2 rounded-md hover:bg-cus-orange hover:border-0 hover:scale-105 uppercase mb-3 md:mb-0 mx-auto my-4">
            <Link to="/GeneralRule">
              <span
                className={`text-2xl font-semibold tracking-wide flex justify-between gap-2   items-center`}
                style={{ fontFamily: "MangoGrotesque" }}
              >
                View <FiArrowUpRight size={25} className="py-0.5" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
export default About;
