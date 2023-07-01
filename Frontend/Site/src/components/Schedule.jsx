import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ScheduleModal from "./ScheduleModal";
import Day1 from "../assets/day-1.svg";
import Day2 from "../assets/day-2.svg";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import getImageUrl from "./utility/dynamic-img";

function Schedule(props) {
  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     ScrollTrigger.matchMedia({
  //       "(min-width: 450px) and (max-width: 767px)": function () {
  //         gsap
  //           .timeline({
  //             scrollTrigger: {
  //               trigger: ".schedule",
  //               // markers: true,
  //               start: "top top+=200",
  //               end: "bottom",
  //               scrub: 1,
  //             },
  //           })
  //           .to(".schedule", { opacity: "1400%" });
  //       },

  //       "(min-width: 768px) and (max-width: 1024px)": function () {
  //         gsap
  //           .timeline({
  //             scrollTrigger: {
  //               trigger: ".schedule",
  //               // markers: true,
  //               start: "top top+=100",
  //               end: "bottom",
  //               scrub: 1,
  //             },
  //           })
  //           .to(".schedule", { opacity: "1400%" });
  //       },

  //       "(min-width: 1024px)": function () {
  //         gsap
  //           .timeline({
  //             scrollTrigger: {
  //               trigger: ".schedule",
  //               // markers: true,
  //               start: "top top+=100",
  //               end: "bottom",
  //               scrub: 1,
  //             },
  //           })
  //           .to(".schedule", { opacity: "1400%" });

  //           gsap
  //           .timeline({
  //             defaults: { ease: "none" },
  //             scrollTrigger: {
  //               trigger: ".schedule",
  //               start: "top top",
  //               end: "bottom bottom",
  //               scrub:1,

  //             },
  //           })
  //           .to("#ScheduleSide", {textDecoration:"underline", onComplete: () => {gsap.to("#ScheduleSide",{textDecoration:"none"})}})
  //       },
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  const [showDay1, setShowDay1] = useState(false);
  const [showDay2, setShowDay2] = useState(false);

  return (
    <section
      id="schedule"
      className="bg-[#171717ff] schedule h-[70vh] relative md:pl-16 flex flex-col items-center"
      style={{
        fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
      }}
    >
      {/* , 'display':'grid','gridTemplateRows':'22% 55% 25%' */}
      {/* <Navbar />
      <SideBar /> */}

      {showDay1 && (
        <ScheduleModal img={Day1} close={() => setShowDay1(false)} />
      )}
      {showDay2 && (
        <ScheduleModal img={Day2} close={() => setShowDay2(false)} />
      )}

      <div className="flex justify-center items-center py-8 sm:py-12 ">
        <p className="font-bold text-white text-7xl md:text-8xl ml-4 pt-8 uppercase tracking-widest">
          SCHEDULE
        </p>
      </div>

      {/* <div className='flex justify-center items-center'>
            <p id="Shine" className="text-3xl xs:text-4xl sm:text-5xl text-orange-700 font-extrabold tracking-widest">COMING SOON</p>
        </div> */}
      <h1 className="text-4xl text-cus-orange text-center">~ you are too early for next year ~</h1>
      <p className="text-3xl text-center text-cus-orange">¯\_(ツ)_/¯</p>
      {/* Day 1
      <div className="py-8">
        <div className="flex flex-col items-center text-white xs:justify-between xs:py-5 xs:px-16  xs:flex-row">
          <span className="mb-2 text-3xl xs:mb-0 xs:text-4xl sm:text-5xl text-cus-orange">
            19 MAY
          </span>
          <span className="text-3xl xs:text-4xl sm:text-5xl">FRIDAY</span>
        </div>

        <div className="flex justify-center flex-col items-center">
          <div className="flex justify-between relative w-[80%]">
            <button
              className="block xs:hidden"
              onClick={() => setShowDay1(true)}
            >
              <LazyLoadImage
                className="relative z-[1] bg-white"
                src={getImageUrl(Day1)}
                alt="Day 1 schedule"
                width="1240"
                height="400"
              />
            </button>
            <LazyLoadImage
              className="relative z-[1] hidden xs:block bg-white"
              src={getImageUrl(Day1)}
              alt="Day1 schedule"
              width="1240"
              height="400"
            />
          </div>
          <p className="text-gray-500 font-BEBAS sm:hidden text-sm mt-2">
            (click to expand)
          </p>
        </div>
      </div>

      Day2 
      <div className="py-8">
        <div className="flex flex-col items-center text-white xs:justify-between xs:py-5 xs:px-16  xs:flex-row">
          <span className="mb-2 text-3xl xs:mb-0 xs:text-4xl sm:text-5xl text-cus-orange">
            20 MAY
          </span>
          <span className="text-3xl xs:text-4xl sm:text-5xl">SATURDAY</span>
        </div>

        <div className="flex justify-center flex-col items-center">
          <div className="flex justify-between relative w-[80%]">
            <button
              className="block xs:hidden"
              onClick={() => setShowDay2(true)}
            >
              <LazyLoadImage
                className="relative z-[1] bg-white"
                src={getImageUrl(Day2)}
                alt="Day 2 menu"
                width="1240"
                height="400"
              />
            </button>
            <LazyLoadImage
              className="relative z-[1] hidden xs:block bg-white"
              src={getImageUrl(Day2)}
              alt="Day 2 menu"
              width="1240"
              height="400"
            />
          </div>
          <p className="text-gray-500 font-BEBAS sm:hidden text-sm mt-2">
            (click to expand)
          </p>
        </div>
      </div> */}

      {/* <div className="flex items-start justify-center py-10">
        <button
          disabled
          className="flex text-white bg-orange-600 px-2 md:px-5 py-2 rounded-md hover:bg-orange-700 hover:scale-105 uppercase"
        >
          <span
            className={`text-base lg:text-xl font-semibold tracking-wide `}
            style={{
              fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
            }}
          >
            Buy Passes Now
          </span>
          <FiArrowUpRight
            className="flex mx-2 items-center justify-center"
            size={25}
          />
        </button>
      </div> */}
    </section>
  );
}

export default Schedule;
