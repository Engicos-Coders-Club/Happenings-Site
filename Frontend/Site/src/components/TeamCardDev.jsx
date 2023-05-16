import React from "react";
import { FaGit, FaInstagram, FaLinkedin } from "react-icons/fa";
import {} from "react-icons/fa";
import { FiLinkedin, FiGithub, FiMail, FiPhone } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function getImageUrl(name) {
  return new URL(`${name}`, import.meta.url).href;
}

function TeamCardsDev(props) {
  return (
    <div className="team-card relative h-max group transition-all duration-150 delay-100">
      <div className="h-[290px] w-[250px] grayscale">
        <img
          src={getImageUrl(props.data.pic)}
          className="w-full h-full object-cover"
          // width="100%"
          // height="100%"
          // effect="blur"
          alt={props.data.Name + "'s image"}
        />
      </div>
      <h2 className="team-name absolute x-0 bottom-[-25px] text-white group-hover:text-cus-bright-orange capitalize font-MANGO text-5xl drop-shadow-sm">
        {props.data.Name}
      </h2>
      <h3 className="absolute x-0 bottom-[-48px] text-white font-basic text-lg">
        {props.data.Designation}
      </h3>

      {/* socials */}
      <div className="absolute flex flex-right justify-start  x-0 bottom-[-70px] gap-x-3 text-gray-500 group-hover:text-white">
        <a
          className="hover:text-cus-bright-orange cursor-pointer"
          href={"mailto:" + props.data.Email}
        >
          <FiMail size={20} />
        </a>
        {/* <a href={"tel" + props.data.Contact}>
          <FiPhone size={20} />
        </a> */}
        <a
          className="hover:text-cus-bright-orange cursor-pointer"
          href={props.data.linkedin}
        >
          <FiLinkedin size={20} />
        </a>
        {props.data?.instagram && (
          <a
            className="hover:text-cus-bright-orange cursor-pointer"
            href={props.data?.instagram}
          >
            <FaInstagram size={20} />
          </a>
        )}
        <a
          className="hover:text-cus-bright-orange cursor-pointer"
          href={props.data?.Github}
        >
          <FiGithub size={20} />
        </a>
      </div>
    </div>
  );
}

export default TeamCardsDev;
