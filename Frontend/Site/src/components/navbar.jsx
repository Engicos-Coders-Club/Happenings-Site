import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef } from "react";
import HamBurg from "../components/hamBurg";
import { createPortal } from "react-dom";

function navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  
  // useEffect(() => {
  //   // add or remove the 'overflow-hidden' class from the body element
  //   if (isOpen) {
  //     document.body.classList.add('overflow-hidden');
  //   } else {
  //     document.body.classList.remove('overflow-hidden');
  //   }
  // }, [isOpen]);

  // sticky navbar ------------>
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 400) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full bg-transparent flex justify-between  pr-4 z-40">
        <div
          className={`relative rounded-md p-5 flex justify-center items-center cursor-pointer ${
            scrolled ? "bg-slate-900 bg-opacity-40" : "transparent"
          } md:bg-transparent`}
          onClick={handleClick}
        >
          <FaBars size={30} color="white" />
        </div>

        <div className="relative flex justify-center items-center  lg:p-6 md:p-5  p-1">
          <img
            src="/assets/GEClogo.svg"
            className="lg:h-[3rem] lg:w-[3rem] md:h-[3rem] md:w-[3rem] h-[2.5rem] w-[2.5rem]"
          ></img>
        </div>
      </nav>

      {isOpen &&
        createPortal(
          <HamBurg handleClick={handleClick} />,
          document.getElementById("modal")
        )}
    </>
  );
}

export default navbar;
