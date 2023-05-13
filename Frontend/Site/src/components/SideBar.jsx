import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SideButton from "../components//SideBarButton";
import Navbar from "./navbar";
import { FaUserAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useEffect } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import logo from '../assets/happenings-logo.png'

// login modal -----------------------
const LoginModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    closeModal(false);
  };

  const { isAuthenticated } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    closeModal(false);
  };
  return (
    <div
      className="fixed overflow-hidden left-0 top-0 bottom-0 z-[1000] bg-[rgba(0,0,0,0.5)] w-full h-full flex items-center justify-center"
      onClick={closeModalHandler}
    >
      <div
        id="modal"
        className="border-orange-500 border-2 border-dotted rounded-tl-3xl rounded-br-3xl pt-5 pb-10 mx-auto w-2/3 md:w-1/3 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-lg flex flex-col px-3 items-center"
      >
        <button
          onClick={closeModalHandler}
          className="flex items-center self-end"
        >
          <FiX className="m-[0.4rem] text-cus-orange" />
        </button>
        
        <p className="font-MANGO text-3xl text-white">Welcome!</p>
        <p className="font-MANGO text-xl tracking-wide text-gray-400">Enter the post-apocalypse world herein.</p>
        {!isAuthenticated && (
          <div className="mt-4 flex justify-center">
            <Link to="/auth">
              <button
                className="bg-orange-600 w-fit rounded-md px-5 mx-auto text-white py-1 md:scale-110 hover:bg-orange-700 text-2xl tracking-wider uppercase"
                style={{ fontFamily: "'MangoGrotesque', 'Oswald'" }}
              >
                login
              </button>
            </Link>
          </div>
        )}

        {isAuthenticated && (
          <div className="mt-4 flex justify-center">
            <button
              className="bg-orange-600 w-fit rounded-md px-5 mx-auto text-white py-1 md:scale-110 hover:bg-orange-700 text-2xl tracking-wider uppercase"
              style={{ fontFamily: "'MangoGrotesque', 'Oswald'" }}
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// sidebar -------------------------------
function SideBar(props) {
  let sideBarClass =
    "absolute left-0 top-0 w-[70px] h-full bg-[#111] z-30 flex flex-wrap hidden md:block lg:block" +
    props.className;

  const [showUserModal, setShowUserModal] = useState(false);

  const showLoginModal = () => {
    setShowUserModal(true);
  };

  useEffect(() => {
    if (showUserModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showUserModal]);

  return (
    <div className="fixed z-[100] md:h-screen">
      <Navbar />
      <div className={sideBarClass}>
        <div className="h-[5rem] w-full relative flex justify-center items-center cursor-pointer"></div>

        <div className="h-[10%] w-full">
          <HashLink smooth to="/#home">
            <img src={logo} className="p-2 mt-2 w-full" />
          </HashLink>
        </div>

        <div className="w-full flex justify-center items-end h-[70%]">
          <ul className="h-full font-MANGO md:text-2xl lg:text-2xl text-sm text-white list-none flex flex-col p-2 cursor-pointer tracking-wide justify-evenly">
            <li
              className="rotate-[-90deg] p-3 hover:underline tracking-wide min"
              id="AboutSide"
            >
              <HashLink smooth to="/#about">
                ABOUT
              </HashLink>
            </li>
            <li
              className="rotate-[-90deg] p-5 hover:underline tracking-wide"
              id="EventSide"
            >
              <HashLink smooth to="/#Eventsec">
                EVENTS
              </HashLink>
            </li>
            <li
              className="rotate-[-90deg] p-2 hover:underline tracking-wide"
              id="ScheduleSide"
            >
              <HashLink smooth to="/#schedule">
                SCHEDULE
              </HashLink>
            </li>
            {/* <li className='rotate-[-90deg] p-2 hover:underline tracking-wide'><HashLink smooth to="/#sponsor">SPONSORS</HashLink></li> */}
            <li
              className="rotate-[-90deg] p-3 hover:underline tracking-wide"
              id="VenueSide"
            >
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

        <div className="w-full flex justify-center">
          <button
            className="rounded-full border border-cus-orange w-10 h-10 flex items-center justify-center"
            onClick={showLoginModal}
          >
            <FaUserAlt className="text-cus-orange" />
          </button>
        </div>

      </div>
      {showUserModal &&
        createPortal(
          <LoginModal closeModal={setShowUserModal} />,
          document.getElementById("modal")
        )}
    </div>
  );
}

export default SideBar;
