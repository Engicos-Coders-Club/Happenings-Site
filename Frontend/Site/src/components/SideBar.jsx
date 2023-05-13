import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SideButton from "../components//SideBarButton";
import Navbar from "./navbar";

function SideBar(props) {
  let sideBarClass =
    "absolute left-0 top-0 w-[70px] h-full bg-[#111] z-30 flex flex-wrap hidden md:block lg:block " +
    props.className;

  return (
    <div className="fixed z-[100] md:h-screen">
      <Navbar />
      <div className={sideBarClass}>
        <div className="h-[3rem] w-full relative flex justify-center items-center cursor-pointer"></div>

        <div className="h-[20%] w-full">
          <HashLink smooth to="/#home">
            <img src="/assets/Rectangle.png" className="p-2 mt-2 w-full" />
          </HashLink>
        </div>

        <div className="w-full flex justify-center items-end h-3/4">
          <ul className="h-full font-MANGO md:text-2xl lg:text-2xl text-sm text-white list-none flex flex-col p-2 cursor-pointer tracking-wide justify-evenly">
            <li className="rotate-[-90deg] p-3 hover:underline tracking-wide min" id="AboutSide">
              <HashLink smooth to="/#about">
                ABOUT
              </HashLink>
            </li>
            <li className="rotate-[-90deg] p-5 hover:underline tracking-wide" id="EventSide">
              <HashLink smooth to="/#Eventsec">
                EVENTS
              </HashLink>
            </li>
            <li className="rotate-[-90deg] p-2 hover:underline tracking-wide" id="ScheduleSide">
              <HashLink smooth to="/#schedule">
                SCHEDULE
              </HashLink>
            </li>
            {/* <li className='rotate-[-90deg] p-2 hover:underline tracking-wide'><HashLink smooth to="/#sponsor">SPONSORS</HashLink></li> */}
            <li className="rotate-[-90deg] p-3 hover:underline tracking-wide" id="VenueSide">
              <HashLink smooth to="/#venue">
                VENUE
              </HashLink>
            </li>
            <li className="rotate-[-90deg] p-5 hover:underline tracking-wide text-orange-500">
              <Link smooth to="/tickets">
                TICKETS
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="relative h-[4px] bg-orange-500 rounded-sm"></div> */}
      </div>
    </div>
  );
}

export default SideBar;
