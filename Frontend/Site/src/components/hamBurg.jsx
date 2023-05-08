import React, { useEffect } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { gsap } from "gsap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

function hamBurg(props) {
  let hamClass =
    "lg:w-[90vw] w-[80vw] relative flex items-center justify-between border-b-0 border-t-2 border-x-2 border-orange-500 hover:bg-white hover:text-black tracking-wide uppercase transition";
  let hamClassLast =
    "lg:w-[90vw] w-[80vw] relative flex items-center justify-between border-b-2 border-t-2 border-x-2 border-orange-500 hover:bg-white hover:text-black track-wide uppercase transition";

  const ReverseAnimation = () => {
    let ctx = gsap.context(() => {
      const screenHeight = window.innerHeight;
      gsap.to(".Ham", {
        y: -screenHeight,
        ease: "ease-out",
        durtaion: 1,
        onComplete: () => {
          props.handleClick();
        },
      });
    });

    return () => {
      ctx.revert();
    };
  };

  useLayoutEffect(() => {
    const screenHeight = window.innerHeight;
    let ctx = gsap.context(() => {
      gsap.from(".Ham", { y: -screenHeight, ease: "back", durtaion: 1 });
    });

    return () => {
      ctx.revert();
    };
  });

  return (
    <div className="h-screen w-full fixed z-[1000] bg-[#171717ff] flex flex-start top-0 gap-0 Ham overflow-hidden left-0">
      <div className=" relative flex flex-wrap text-white text-5xl font-MANGO grow">
        <HashLink smooth to="/#home" className={hamClass}>
          <div className="pl-9 " onClick={ReverseAnimation}>
            home
          </div>
          <div className="pr-9 " onClick={ReverseAnimation}>
            <BsBoxArrowUpRight size={30} color="#171717ff" />
          </div>
        </HashLink>

        <HashLink smooth to="/#about" className={hamClass}>
          <div className="pl-9 " onClick={ReverseAnimation}>
            ABOUT
          </div>
          <div className="pr-9 " onClick={ReverseAnimation}>
            <BsBoxArrowUpRight size={30} color="#171717ff" />
          </div>
        </HashLink>

        <Link to="/tickets" className={hamClass}>
          <div className="pl-9" onClick={ReverseAnimation}>
            BUY PASSES
          </div>
          <div className="pr-9" onClick={ReverseAnimation}>
            <BsBoxArrowUpRight size={30} color="#171717ff" />
          </div>
        </Link>

        <Link to="/GeneralRule" className={hamClass}>
          <div className="pl-9" onClick={ReverseAnimation}>
            rules & points system
          </div>
          <div className="pr-9" onClick={ReverseAnimation}>
            <BsBoxArrowUpRight size={30} color="#171717ff" />
          </div>
        </Link>

        <HashLink smooth to="/all-events" className={hamClass}>
          <div className="pl-9" onClick={ReverseAnimation}>
            EVENTS
          </div>
          <div className="pr-9" onClick={ReverseAnimation}>
            <BsBoxArrowUpRight size={30} color="#171717ff" />
          </div>
        </HashLink>

        <HashLink smooth to="/#schedule" className={hamClass}>
          <div className="pl-9" onClick={ReverseAnimation}>
            SCHEDULE
          </div>
          <div className="pr-9" onClick={ReverseAnimation}>
            <BsBoxArrowUpRight size={30} color="#171717ff" />
          </div>
        </HashLink>

        {/* <HashLink smooth to="/#sponsor" className={hamClass}>
          <div className="pl-9" onClick={ReverseAnimation}>
            sponsors
          </div>
          <div className="pr-9" onClick={ReverseAnimation}>
            <BsBoxArrowUpRight size={30} color="#171717ff" />
          </div>
        </HashLink> */}

        <div className={hamClassLast}>
          {/* <div className='pl-9' onClick={ReverseAnimation}>TIME</div> */}
          <div className="pl-9" onClick={ReverseAnimation}>
            {" "}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col justify-between p-5">
        <div className="flex justify-center items-center">
          <AiOutlineClose
            size={40}
            color="white"
            onClick={ReverseAnimation}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/assets/GEClogo.svg"
            className="lg:h-[3rem] lg:w-[3rem] h-[5rem] sm:w-[4rem] sm:h-[4rem] w-[5rem] relative"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default hamBurg;
