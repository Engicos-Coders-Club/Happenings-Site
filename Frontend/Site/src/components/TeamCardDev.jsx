import React from "react";
import { FaGit, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import {} from "react-icons/fa";
import {FiLinkedin, FiGithub, FiMail, FiPhone} from "react-icons/fi"

function TeamCardsDev(props) {
  return (
    <div className="team-card relative h-max group transition-all duration-150 delay-100">
      <div className="h-[290px] w-[250px] grayscale">
        <img src={props.data.pic} className="h-full w-full object-cover"></img>
      </div>
      <h2 className="absolute x-0 bottom-[-25px] text-white group-hover:text-cus-bright-orange capitalize font-MANGO text-5xl drop-shadow-sm">
        {props.data.Name}
      </h2>
      <h3 className="absolute x-0 bottom-[-45px] text-white font-basic text-xl">
        {props.data.Designation}
      </h3>

      {/* socials */}
      <div className="absolute flex flex-right justify-start  x-0 bottom-[-70px] gap-x-3 text-gray-500 group-hover:text-white">
        <a className="hover:text-cus-bright-orange cursor-pointer" href={"mailto:" + props.data.Email}>
          <FiMail size={20} />
        </a>
        {/* <a href={"tel" + props.data.Contact}>
          <FiPhone size={20} />
        </a> */}
        <a className="hover:text-cus-bright-orange cursor-pointer" href={props.data.linkedin}>
          <FiLinkedin size={20} />
        </a>
        {props.data?.instagram && (
          <a className="hover:text-cus-bright-orange cursor-pointer" href={props.data?.instagram}>
            <FaInstagram size={20} />
          </a>
        )}
        <a className="hover:text-cus-bright-orange cursor-pointer" href={props.data?.Github}>
          <FiGithub size={20} />
        </a>
      </div>
    </div>
  );
}

export default TeamCardsDev;
